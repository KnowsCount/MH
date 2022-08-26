import styled from 'styled-components'

interface Props {
	cards: {
		title: string
		issueNumber: number
	}[]
}

const Container = styled.div`
	max-width: 900px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
	grid-gap: 48px;
	margin: 0 auto;
`

const Card = styled.div`
	cursor: pointer;
	position: relative;
	height: 0;
	padding-bottom: 120%;
	--offset-multiplier: 4px;
	transition: transform 0.6s ease;
	--translate: 0;
	transform: translate(var(--translate), var(--translate));
	:hover {
		--offset-multiplier: 6px;
	}
	:hover {
		--translate: calc(-1px * (var(--cards) - 1));
		transition: transform 0.3s ease;
	}
`

const Child = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 0 16px;
	box-sizing: border-box;
	background: #fff;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1),
		0px -4px 8px rgba(255, 255, 255, 0.8);
	border-radius: 6px;
	transition: inherit;
	--translate: calc(var(--offset) * var(--offset-multiplier));
	transform: translate(var(--translate), var(--translate));
	z-index: 5;
	:nth-child(1) {
		--offset: 0;
		z-index: 4;
	}
	:nth-child(2) {
		--offset: 1;
		z-index: 3;
	}
	:nth-child(3) {
		--offset: 2;
		z-index: 2;
	}
	:nth-child(4) {
		--offset: 3;
		z-index: 1;
	}
	:nth-child(5) {
		--offset: 4;
		z-index: 0;
	}
`

const Title = styled.h2`
	font-family: Arbutus Slab, serif;
	font-weight: normal;
	color: #000;
	line-height: 1.25;
`

const Text = styled.p`
	position: absolute;
	bottom: 0;
	font-size: 14px;
`

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
