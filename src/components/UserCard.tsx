import { User } from "../interfaces/User"
import styled from "styled-components"
import { useRouter } from "next/router"
import { useCallback } from "react"
import { Button } from "./Button"

type Props = {

} & Pick<User, 'login' | 'bio' | 'email' | 'name' | 'websiteUrl' | 'avatarUrl'>

const Avatar = styled.img`
    width: 100%;
`

const CardContainer = styled.div`
    grid-column: span 2;
`

const Name = styled.h2`
    text-align: center;
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const UserCard: React.FC<Props> = (props) => {
    const router = useRouter();

    const goToUserPage = useCallback(
        () => {
            router.push(`/users/${props.login}`)
        },
        [props.login],
    );

    return (
        <CardContainer>
            <Avatar src={props.avatarUrl} />
            <FlexContainer>
                <Name>{props.login}</Name>
                <Button onClick={goToUserPage}>Show more</Button>
            </FlexContainer>
        </CardContainer>
    )

}