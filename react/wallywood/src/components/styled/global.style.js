import {createGlobalStyle} from 'styled-components'
import { Reset } from './mixins'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
html, body {

}

body {
    background-color: ${props => props.theme.colors.primary};
    ${Reset}

}
`


export {GlobalStyle}