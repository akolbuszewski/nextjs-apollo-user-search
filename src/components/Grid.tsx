import styled from "styled-components";
import { breakpoint } from 'styled-components-breakpoint';

export interface RowProps {
    mobile: string,
    tablet: string,
    desktop: string,
    justify?: string;
}

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

export const Row = styled.div<RowProps>`
    grid-column: ${(props) => props.mobile};
    ${(props) => breakpoint('tablet')`
        grid-column: ${props.tablet};
    `}
    ${(props) => breakpoint('desktop')`
        grid-column: ${props.desktop};
    `}

    ${(props) => 
        props.justify && `justify-self: ${props.justify}`
    }
`