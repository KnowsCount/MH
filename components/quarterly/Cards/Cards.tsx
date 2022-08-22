import { Container, Card, Child, Title, Text } from '../../common/Card'

interface Props {
	cards: {
		title: string
		issueNumber: number
	}[]
}

const Cards: React.FC<Props> = ({ cards }) => {
	return (
		<Container>
			{cards.map((card, i) => {
				return (
					<>
						<Card>
							<Child>
								<Title>Issue {card.issueNumber}</Title>
								<Text>{card.title}</Text>
							</Child>
						</Card>

						{/* {Array(card.contentCount).fill(<Child></Child>)} */}
					</>
				)
			})}
		</Container>
	)
}

export default Cards
