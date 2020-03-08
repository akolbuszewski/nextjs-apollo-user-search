import styled from "styled-components";
import {breakpoint} from "styled-components-breakpoint";

export const Button = styled.button`
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