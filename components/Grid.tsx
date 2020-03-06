import styled from "styled-components";
import { breakpoint } from 'styled-components-breakpoint';
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column: 1/5;
    grid-column-gap: 1em;
    grid-row-gap: 1.5em;
    ${breakpoint('tablet')`
        grid-template-columns: repeat(8, 1fr);
        grid-column: 1/9;
    `}
    ${breakpoint('desktop')`
        grid-template-columns: repeat(12, 1fr);
        grid-column: 1/13;
    `}
`