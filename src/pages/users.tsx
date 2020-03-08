import * as React from 'react'
import withApollo from '../../lib/withApollo'
import { useQuery } from '@apollo/react-hooks';
import { Grid } from '../components/Grid';
import { Search } from '../components/Search';
import { useState } from 'react';
import { UserCardList } from '../components/CardList';
import { SelectOption, Select } from '../components/Select';
import { Validation } from '../components/Validation';
import { SearchType } from '../interfaces/SearchType';
import { SEARCH_USERS_QUERY } from '../query';
import { validators } from '../validators';
import { mapQueryResultToUsers } from '../helpers/mappers';

const initialOptions: SelectOption[] = [
  {
  name: SearchType.login,
  value: SearchType.login,
  selected: false,
},
{
  name: SearchType.name,
  value: SearchType.name,
  selected: false,
},
{
  name: SearchType.email,
  value: SearchType.email,
  selected: true,
},]

const UsersPage: React.FunctionComponent = () => {
  const [search, setSearch] = useState('');
  const [options, setOptions] = useState<SelectOption[]>(initialOptions);

  const changeSearch = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    [],
  )

  const selectOptions = React.useCallback(
    (name: string) => {
      setOptions(options.map(
        option => (
          {...option, selected: option.name === name}
            )
          )
        )
    },
    [],
  )
  
  const fieldType = options.find(option => option.selected);

  const { loading, error, data } = useQuery(SEARCH_USERS_QUERY, {
    variables: { query: `${search} in:${fieldType && fieldType.name}`, first: 10 },
    skip: !process.browser,
  });

  const users = mapQueryResultToUsers(data);

  const currentlySelectedOption: SearchType = options.find((option) => option.selected)?.name || SearchType.name;
  
  if(error){
    return <h1>{JSON.stringify(error)}</h1>
  }

  return (
    <Grid>
      <Select options={options} selectCallback={selectOptions} />
      <Validation
        validation={validators[currentlySelectedOption].validator}
        value={search}
        onChange={changeSearch}
        errorMsg={validators[currentlySelectedOption].errorMsg}
        render={ ({value, onChange}) =>
        <Search onChange={onChange} value={value} placeholder={currentlySelectedOption}/>
      }
      />
      {(!loading || data) &&<UserCardList userList={users} />}
    </Grid>
  )
}

export default withApollo(UsersPage)
