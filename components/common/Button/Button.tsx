import styled from 'styled-components'

const Button = styled.button`
	overflow: hidden;
	position: relative;
	padding: 10px;
	margin: 10px;
	color: white;
	background: black;
	font-size: 1.2em;
	border: 2px black solid;
	border-radius: 5px;
	text-align: center;
	transition: all 0.3s ease;
	cursor: pointer;
	:hover {
		color: black;
		background: white;
	}
`

interface Props {
	children?: React.ReactNode
	onClick: () => void
}

const ButtonComponent: React.FC<Props> = ({ children, onClick }) => {
	return <Button>{children}</Button>
}

export default ButtonComponent
