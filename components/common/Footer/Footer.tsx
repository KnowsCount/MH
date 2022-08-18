import styled from 'styled-components'

const FooterWrapper = styled.div`
	background: #000;
	color: #fff;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Footer = () => {
	return (
		<FooterWrapper>
			<p>&copy; 2022 Huginn</p>
		</FooterWrapper>
	)
}

export default Footer
