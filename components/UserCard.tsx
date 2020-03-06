import { User } from "../interfaces/User"
import styled from "styled-components"

type Props = {

} & Pick<User, 'login' | 'bio' | 'email' | 'name' | 'websiteUrl' | 'avatarUrl'>

const Avatar = styled.img`
    width: 100%;
`

const CardContainer = styled.div`
    grid-column: span 3;
`

const Name = styled.h2`
    text-align: center;
`

const Anchor = styled.a`
`
const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`
const Bio = styled.p`

`
export const UserCard: React.FC<Props> = (props) => (
    <CardContainer>
        <Avatar src={props.avatarUrl}></Avatar>
        <Name>{props.name}</Name>
        <FlexContainer>
                  <div>{props.login}</div>
                  <span>•</span>
                  <Anchor href={props.email}>{props.email}</Anchor>
                  <span>•</span>
                  <Anchor href={props.websiteUrl}>Website</Anchor>
        </FlexContainer>
        <Bio>{props.bio}</Bio>
    </CardContainer>
)