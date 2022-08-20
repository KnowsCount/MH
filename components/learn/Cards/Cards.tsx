import styled from 'styled-components'

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

const cards = [
	{
		title: 'Why Learn',
		contentCount: 2,
	},
	{
		title: 'Why Still',
		contentCount: 5,
	},
	{
		title: 'How do I Learn',
		contentCount: 3,
	},
	{
		title: 'What Next?',
		contentCount: 3,
	},
	{
		title: 'Keep Learning',
		contentCount: 9,
	},
	{
		title: "I'll Quit",
		contentCount: 5,
	},
	{
		title: 'Makes Sense',
		contentCount: 1,
	},
]

const Cards = () => {
	return (
		<Container>
			{/* <Card>
				<Child>
					<Title>Why do I need a will</Title>
					<Text>4 videos</Text>
				</Child>
				<Child></Child>
				<Child></Child>
				<Child></Child>
				<Child></Child>
			</Card> */}
			{cards.map((card, i) => {
				const childArray: JSX.Element[] = []
				let length = card.contentCount >= 5 ? 5 : card.contentCount
				for (let i = 1; i < length; i++) {
					childArray.push(<Child key={i}></Child>)
				}
				return (
					<>
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
					</>
				)
			})}
		</Container>
	)
}

export default Cards
