import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'

// TODO: add working reset file
// TODO: change babel config(?) so styled-components work on reloading for ssr
export const GlobalStyle = createGlobalStyle`
    ${reset};
    body {
        font-family: 'Courier New', Courier, monospace !important;
        padding: 3rem 1rem 2rem 1rem;  
    }
    * {
        box-sizing: border-box;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
    }

    /**
    * Show the overflow in IE.
    * 1. Show the overflow in Edge.
    */

    button,
    input { /* 1 */
    overflow: visible;
    }

    /**
    * Remove the inheritance of text transform in Edge, Firefox, and IE.
    * 1. Remove the inheritance of text transform in Firefox.
    */

    button,
    select { /* 1 */
    text-transform: none;
    }

    /**
    * Correct the inability to style clickable types in iOS and Safari.
    */

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
    -webkit-appearance: button;
    }
`