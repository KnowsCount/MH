import styled from 'styled-components'

const HeadingWrapper = styled.h1`
	color: #000;
	font-size: 10rem;
	font-weight: 900;
`

const Heading = ({ children }) => {
	return <HeadingWrapper>{children}</HeadingWrapper>
}

export default Heading
