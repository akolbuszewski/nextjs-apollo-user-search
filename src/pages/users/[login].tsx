import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_QUERY } from '../../query';
import withApollo from '../../../lib/withApollo';
import { User } from '../../interfaces/User';
import { Grid, RowProps, Row } from '../../components/Grid';


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


const UserPage = () => {
  const router = useRouter()
  const { login } = router.query;

  const { loading, data } = useQuery(GET_USER_QUERY, {
    variables: { login },
    skip: !process.browser,
  });

  if (loading || !data) {
    return null;
  }

  const user: Pick<User, 'name' | 'bio' | 'websiteUrl' | 'login'> = data.user;

  return (
    <Grid>
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
    </Grid>
  )
}

export default withApollo(UserPage)