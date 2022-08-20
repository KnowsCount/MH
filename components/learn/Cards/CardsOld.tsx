import styled from 'styled-components'

type Props = {
	bgImage: String
}

let backgroundDark = '#2d3548'
let textLight = 'rgba(255,255,255,0.6)'
let textLighter = 'rgba(255,255,255,0.9)'
let spacingS = '8px'
let spacingM = '16px'
let spacingL = '24px'
let spacingXl = '32px'
let spacingXxl = '64px'
let widthContainer = '1200px'

const CardWrapper = styled.section`
	align-items: flex-start;
	/* background-image: linear-gradient(15deg, #0f4667 0%, #2a6973 150%); */
	display: flex;
	min-height: 100%;
	justify-content: center;
	padding: ${spacingXxl} ${spacingL};
`

const CardGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-column-gap: ${spacingL};
	grid-row-gap: ${spacingL};
	max-width: ${widthContainer};
	width: 100%;
	:hover > .card:not(:hover) .card-background {
		filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
	}
	@media (min-width: 540px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 960px) {
		grid-template-columns: repeat(4, 1fr);
	}
`

const Card = styled.a`
	list-style: none;
	position: relative;
	:before {
		content: '';
		display: block;
		padding-bottom: 150%;
		width: 100%;
	}
	:hover .card-background {
		transform: scale(1.05) translateZ(0);
	}
`

const CardBackground = styled.div<Props>`
	background-size: cover;
	background-position: center;
	border-radius: ${spacingL};
	bottom: 0;
	filter: brightness(0.75) saturate(1.2) contrast(0.85);
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	transform-origin: center;
	trsnsform: scale(1) translateZ(0);
	transition: filter 200ms linear, transform 200ms linear;
	background-image: ${(props) => `url(${props.bgImage}`};
`

const CardContent = styled.div`
	left: 0;
	padding: ${spacingL};
	position: absolute;
	top: 0;
`

const CardCategory = styled.div`
	color: ${textLight};
	font-size: 0.9rem;
	margin-bottom: ${spacingS};
	text-transform: uppercase;
`

const CardHeading = styled.div`
	color: ${textLighter};
	font-size: 1.9rem;
	text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
	line-height: 1.4;
	word-spacing: 100vw;
`

const Cards = ({ bgImage }: Props) => {
	return (
		<CardWrapper>
			<CardGrid>
				<Card href="#" className="card">
					<CardBackground
						className="card-background"
						bgImage={bgImage}
					></CardBackground>
					<CardContent>
						<CardCategory>Category</CardCategory>
						<CardHeading>Example Card Heading</CardHeading>
					</CardContent>
				</Card>
			</CardGrid>
		</CardWrapper>
	)
}

export default Cards
