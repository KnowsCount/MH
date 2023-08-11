import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

const BackdropContainer = styled.div`
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
	z-index: 100;
	position: fixed;
	top: 0;
	left: 0;
`

const DivIcon = styled.div`
	display: flex;
	height: 80px;
	margin-right: 10px;
	justify-content: flex-end;
	align-items: center;
`

const CloseIcon = styled(FaTimes)`
	color: #fff;
	size: 40px;
`

const Backdrop = ({ show: any, click }) => {
	return (
		show && (
			<BackdropContainer onClick={click}>
				<DivIcon>
					<CloseIcon size={40} />
				</DivIcon>
			</BackdropContainer>
		)
	)
}

export default Backdrop
