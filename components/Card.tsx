import { User } from "../interfaces/User"

type Props = {

} & Pick<User, 'login' | 'bio' | 'email' | 'name' | 'websiteUrl' | 'avatarUrl'>

export const Card: React.FC<Props> = (props) => (
    <div>
        <h1>{props.name}</h1>
        <img src={props.avatarUrl}></img>
    </div>
)