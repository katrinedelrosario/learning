import styled from 'styled-components'
import { Reset } from './mixins'

export const HeaderStyle = styled.header `
border: solid 1px #000;
display: flex;
justify-content: space-between;

h1 {
    font-family: ${props => props.theme.fonts[0]};
    text-transform: uppercase;
    color: ${props => props.theme.colors.secondary};
    font-size: 3rem;
    font-weight: 900;
    ${Reset};
}
`
