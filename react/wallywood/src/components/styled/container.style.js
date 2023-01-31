import styled from 'styled-components'

export const ContainerStyle = styled.section `
    margin: 0 auto;
	background-color: ${props => props.theme.colors.light};
	width: 100%;
	height: 100vh;
	max-width: ${props => props.maxwidth}px;
	padding: 1.0rem 2.3rem;
    
`
