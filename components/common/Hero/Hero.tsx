import styled from 'styled-components'

const HeroWrapper = styled.div`
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fff;
	padding-left: 5em;
	padding-right: 5em;
`

const Hero = ({ children }) => {
	return <HeroWrapper>{children}</HeroWrapper>
}

export default Hero
