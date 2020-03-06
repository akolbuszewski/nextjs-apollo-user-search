import * as React from 'react'
import withApollo from '../lib/withApollo'
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { User } from '../interfaces/User';
import { Grid } from '../components/Grid';
import { Search } from '../components/Search';
import { useState } from 'react';
import { UserCardList } from '../components/CardList';
import { SelectOption, Select } from '../components/Select';


const QUERY2 = gql`
query SearchUsers($query: String!, $first: Int! ) {
  search(query: $query, type: USER, first: $first) {
    edges {
      node {
        ... on User {
          login,
          name,
          bio,
          websiteUrl,
          email,
          avatarUrl,
        }
      }
    }
  }
}`

const mapQueryResultToUsers = (results: any): User[] => {
  return !!results && results.search.edges.reduce(
    (users: User[], edge: any) => [...users, edge.node],
    [],
  )
}

const initialOptions: SelectOption[] = [
  {
  name: 'login',
  value: 'login',
  selected: false,
},
{
  name: 'name',
  value: 'name',
  selected: false,
},
{
  name: 'email',
  value: 'email',
  selected: true,
},
]

const AboutPage: React.FunctionComponent = () => {
  const [search, setSearch] = useState('');
  const [options, setOptions] = useState<SelectOption[]>(initialOptions);

  const changeSearch = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
      refetch();
    },
    [],
  )

  const selectOptions = React.useCallback(
    (name: string) => {
      console.log(name);
      setOptions(options.map(
        option => (
          {...option, selected: option.name === name}
            )
          )
        )
      refetch();
    },
    [],
  )
  
  const fieldType = options.find(option => option.selected);
    console.log(`${search} in:${fieldType && fieldType.name}`)

  const { loading, error, data, refetch } = useQuery(QUERY2, {
    variables: { query: `${search} in:${fieldType && fieldType.name}`, first: 10 },
  });
 
  if(error){
    return <h1>{JSON.stringify(error)}</h1>
  }

  const users = mapQueryResultToUsers(data);
  return (
    <Grid>
      <Select options={options} selectCallback={selectOptions} />
      
      <Search onChange={changeSearch} value={search}></Search>
        {(!loading || data) &&<UserCardList userList={users} />}
    </Grid>
  )
}

export default withApollo(AboutPage)
