import * as React from 'react'
import withApollo from '../../lib/withApollo'
import { useQuery } from '@apollo/react-hooks';
import { Grid, RowProps, Row } from '../components/Grid';
import { Search } from '../components/Search';
import { useState, useCallback } from 'react';
import { UserCardList } from '../components/CardList';
import { SelectOption, Select } from '../components/Select';
import { Validation } from '../components/Validation';
import { SearchType } from '../interfaces/SearchType';
import { SEARCH_USERS_QUERY } from '../query';
import { validators } from '../validators/validators';
import { mapQueryResultToUsers } from '../helpers/mappers';
import { Button } from '../components/Button';
import { GlobalStyle } from '../styles/globalStyle';

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

const centerRowProps: RowProps = {
  mobile: '2/4',
  tablet: '4/6',
  desktop: '6/8',
}


const UsersPage: React.FunctionComponent = () => {
  const [search, setSearch] = useState('');
  const [options, setOptions] = useState<SelectOption[]>(initialOptions);
  const [isValid, setIsValid] = useState(false);
  const [shouldQuery, setShouldQuery] = useState(false);
  const [querySearchValue, setQuerySearchValue] = useState('');
  const [queryTypeValue, setQueryTypeValue] = useState('');

  const changeSearch = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    [],
  )

  const selectOptions = useCallback(
    (name: string) => {
      setOptions(options.map(
        option => (
          { ...option, selected: option.name === name }
        )
      )
      )
    },
    [],
  )


  const queryForUsers = useCallback(
    () => {
      const fieldType = options.find(option => option.selected);

      setShouldQuery(true);
      setQuerySearchValue(search);
      setQueryTypeValue((fieldType as any).name);
    },
    [search, options],
  )


  const { loading, error, data } = useQuery(SEARCH_USERS_QUERY, {
    variables: { query: `${querySearchValue} in:${queryTypeValue}`, first: 10 },
    skip: !process.browser || !shouldQuery,
  });

  const users = mapQueryResultToUsers(data);

  const currentlySelectedOption: SearchType = options.find((option) => option.selected)?.name || SearchType.name;

  if (error) {
    return <h1>{JSON.stringify(error)}</h1>
  }
  return (
    <Grid>
      <GlobalStyle />
      <Row {...centerRowProps}>
        <Select options={options} selectCallback={selectOptions} />
      </Row>
      <Row {...centerRowProps}>
        <Validation
          validation={validators[currentlySelectedOption].validator}
          value={search}
          onChange={changeSearch}
          isValidCallback={setIsValid}
          errorMsg={validators[currentlySelectedOption].errorMsg}
          render={({ value, onChange }) =>
            <Search onChange={onChange} value={value} placeholder={currentlySelectedOption} />
          }
        />
      </Row>
      <Row {...centerRowProps} justify="center">
       <Button disabled={!isValid} onClick={queryForUsers}>SEARCH</Button>
      </Row>
      {(!loading || data) && <UserCardList userList={users} />}
    </Grid>
  )
}

export default withApollo(UsersPage)
