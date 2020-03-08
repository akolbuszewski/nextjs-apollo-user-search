import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_QUERY } from '../../query';
import withApollo from '../../../lib/withApollo';
import { User } from '../../interfaces/User';
import { Grid, RowProps, Row } from '../../components/Grid';
import { GlobalStyle } from '../../styles/globalStyle';
import { Button } from './../../components/Button';
import { useCallback } from 'react';


const leftRowProps: RowProps = {
  mobile: '1/3',
  tablet: '2/4',
  desktop: '4/6',
}

const rightRowProps: RowProps = {
  mobile: '3/5',
  tablet: '4/6',
  desktop: '6/8',
}

const centerRowProps: RowProps = {
  mobile: '2/4',
  tablet: '3/5',
  desktop: '5/7',
}


const UserPage = () => {
  const router = useRouter()
  const { login } = router.query;

  const goToUsersPage = useCallback(
    () => {
        router.push(`/users`)
    },
    [],
);

  const { loading, data } = useQuery(GET_USER_QUERY, {
    variables: { login },
    skip: !process.browser,
  });

  if (loading || !data) {
    return null;
  }

  const user: Pick<User, 'name' | 'bio' | 'websiteUrl' | 'login' | 'email'> = data.user;

  return (
    <Grid>
      <GlobalStyle/>
      <Row {...leftRowProps}>
        <p>Login:</p>
      </Row>
      <Row {...rightRowProps}>
        <p>{user.login}</p>
      </Row>
      <Row {...leftRowProps}>
        <p>Name:</p>
      </Row>
      <Row {...rightRowProps}>
        <p>{user.name}</p>
      </Row>
      <Row {...leftRowProps}>
        <p>Bio:</p>
      </Row>
      <Row {...rightRowProps}>
        <p>{user.bio}</p>
      </Row>
      <Row {...leftRowProps}>
        <p>Website url:</p>
      </Row>
      <Row {...rightRowProps}>
        <a href={user.websiteUrl}>{user.websiteUrl}</a>
      </Row>
      <Row {...leftRowProps}>
        <p>Email:</p>
      </Row>
      <Row {...rightRowProps}>
        <p>{user.email}</p>
      </Row>
      <Row {...centerRowProps}>
        <Button onClick={goToUsersPage}>Go Back</Button>
      </Row>
    </Grid>
  )
}

export default withApollo(UserPage)