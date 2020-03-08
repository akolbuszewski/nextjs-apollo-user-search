import { ChangeEvent } from "react"
import styled from "styled-components"

type Props = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    value: string,
    placeholder: string,
}

const SearchInput = styled.input`
    max-width: 300px;
`

export const Search: React.FC<Props> = (props) => (
    <SearchInput type="text" value={props.value} placeholder={props.placeholder} onChange={props.onChange}></SearchInput>
)