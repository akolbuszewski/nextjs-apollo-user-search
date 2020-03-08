import { useState, useEffect } from "react";
import styled from "styled-components";

type Props = {
    render: (val: any) => any,
    validation: (value: string) => boolean,
    value: string,
    errorMsg: string,
    onChange: (e: any) => void,
    isValidCallback: (isValid: boolean) => void,
}

const InputContainer = styled.div`
    
`

const ErrorMsg = styled.p`
 color: red;
 text-align: center;
`

export const Validation: React.FC<Props> = (props) => {
    const [isValid, setIsValid] = useState(true);
    useEffect(() => {
        if (props.value.length) {
            const isValid = props.validation(props.value);
            setIsValid(isValid);
            props.isValidCallback(isValid);
        }
    }, [props.value, props.validation])

    return (
        <InputContainer>
            {props.render({ value: props.value, onChange: props.onChange })}
            {!isValid &&
                <ErrorMsg>{props.errorMsg}</ErrorMsg>
            }
        </InputContainer>

    )
}