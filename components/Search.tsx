import { ChangeEvent } from "react"
import styled from "styled-components"
import { breakpoint } from "styled-components-breakpoint";
type Props = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    value: string,
}

const SearchInput = styled.input`
  grid-column: 1/5;
    ${breakpoint('tablet')`
        grid-column: 1/9;
    `}
    ${breakpoint('desktop')`
        grid-column: 1/13;
    `}
    max-width: 300px;
    justify-self: center;
`

export const Search: React.FC<Props> = (props) => (
    <SearchInput type="text" value={props.value} onChange={props.onChange}></SearchInput>
)