import styled from 'styled-components'
import Link from 'next/link'

const ListWrapper = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	font-family: sans-serif;
	font-size: 200%;
`

const ItemWrapper = styled.li`
	margin: 2rem auto;
	padding: 1rem;
	background-color: whtie;
	border: 2px solid black;
	border-radius: 3px;
	max-width: 50%;
	text-align: center;
	transition: 0.2s 0.1s;
	cursor: pointer;
	font-weight: 300;
	transition: color 100ms ease-in-out;
	transition: background-color 100ms ease-in-out;
	:hover {
		background-color: black;
		color: white;
	}
`

const ItemText = styled.span``

const CourseList = (props: any) => (
	<ListWrapper>
		{props.items.map((item, index) => (
			<ItemWrapper key={index}>
				<Link href={item.path}>
					<ItemText>{item.title}</ItemText>
				</Link>
			</ItemWrapper>
		))}
	</ListWrapper>
)

export default CourseList
