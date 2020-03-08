import { ChangeEvent, useCallback } from "react"
import styled from "styled-components"
import { breakpoint } from "styled-components-breakpoint"
import { SearchType } from "../interfaces/SearchType"

export type SelectOption = {
    name: SearchType,
    value: SearchType,
    selected: boolean,
}
type Props = {
    options: SelectOption[],
    selectCallback: (itemName: string) => void,
}

const SelectComponent = styled.select`
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

export const Select: React.FC<Props> = (props) => {
    const callback = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            props.selectCallback(e.target.value);
        },
        [props.selectCallback],
    )

    return (
        <SelectComponent onChange={callback}>
            {props.options.map((option, index) => 
                <option key={index} value={option.value} selected={option.selected}>{option.name}</option>
            )}
        </SelectComponent>
    )
}