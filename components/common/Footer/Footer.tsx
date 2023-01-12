import styled from 'styled-components'

const FooterWrapper = styled.div`
	background: #000;
	color: #fff;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	bottom: 0;
	width: 100%;
`

const Footer = () => {
	return (
		<FooterWrapper>
			<p>&copy; 2022 Huginn</p>
		</FooterWrapper>
	)
}

export default Footer
