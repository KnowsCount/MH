import Link from 'next/link'
import { Container, Card, Child, Title, Text } from '../../common/Card'

interface Props {
	cards: {
		title: string
		path: string
		contentCount: number
	}[]
}

const Cards: React.FC<Props> = ({ cards }) => {
	return (
		<Container>
			{cards.map((card, i) => {
				const childArray: JSX.Element[] = []
				let length = card.contentCount >= 5 ? 5 : card.contentCount
				for (let i = 1; i < length; i++) {
					childArray.push(<Child key={i}></Child>)
				}
				return (
					<>
						<Link href={card.path}>
							<Card>
								<Child>
									<Title>{card.title}</Title>
									<Text>
										{card.contentCount} videos / articles
									</Text>
								</Child>
								{childArray}
							</Card>

							{/* {Array(card.contentCount).fill(<Child></Child>)} */}
						</Link>
					</>
				)
			})}
		</Container>
	)
}

export default Cards
