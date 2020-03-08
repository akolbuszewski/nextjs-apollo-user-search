import { useState, useEffect } from "react";
import styled from "styled-components";
import {breakpoint} from "styled-components-breakpoint";

type Props = {
    render: (val: any) => any,
    validation: (value: string) => boolean,
    value: string,
    errorMsg: string,
    onChange: (e:any) => void,
}

const InputContainer = styled.p`
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

const ErrorMsg = styled.p`
 color: red;
 text-align: center;
`

export const Validation: React.FC<Props> = (props) => {
    const [isValid, setIsValid] = useState(true);
    useEffect(() => {
        if(props.value.length)
            setIsValid(props.validation(props.value))
    }, [props.value])

    return (
        <InputContainer>
            {props.render({value: props.value, onChange: props.onChange})}
            {!isValid && 
                <ErrorMsg>{props.errorMsg}</ErrorMsg>
            }
        </InputContainer>
        
    )
}