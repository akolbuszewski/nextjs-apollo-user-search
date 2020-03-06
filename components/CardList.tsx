import { User } from "../interfaces/User"
import { UserCard } from "./UserCard";
import { Grid } from "./Grid";
type Props = {
    userList: User[],
}


export const UserCardList: React.FC<Props> = (props: Props) => 
{
    return (
    <Grid>
    {props.userList && props.userList.map(user => 
        <UserCard 
            name={user.name}
            bio={user.bio} 
            avatarUrl={user.avatarUrl} 
            websiteUrl={user.websiteUrl}
            login={user.login}
            email={user.email}
         />
    )}
    </Grid>
    )
}