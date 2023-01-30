import styled from 'styled-components'

export const ContainerStyle = styled.section `
	background-color: ${props => props.theme.colors.light};
    min-height: 100vh;
    max-width: ${props => props.maxwidth}px;
    margin: 0 auto;
`
