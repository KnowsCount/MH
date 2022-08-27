import { useRef } from 'react'
import styled from 'styled-components'
import Plyr, { APITypes } from 'plyr-react'
import 'plyr-react/plyr.css'
// import { Button } from '../Button'

interface Props {
	videoId: string
	videoProvider: any
	videoOptions?: any
}

const ButtonWrapper = styled.div`
	padding-top: 2rem;
	display: flex;
	justify-content: center;
`

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

const PlyrComponent = (props: Props) => {
	const videoId = props.videoId
	const videoProvider = props.videoProvider
	const videoOptions = props.videoOptions || undefined

	const ref = useRef<APITypes>(null)

	const enterVideo = () => {
		;(ref.current?.plyr as Plyr)?.fullscreen.enter()
	}

	const goBack = () => {
		return window.location.href.replace(
			/(\d+)$/,
			function (str, p1, p2): any {
				return Number(p1) - 1
			}
		)
	}

	const goNext = () => {
		return window.location.href.replace(
			/(\d+)$/,
			function (str, p1, p2): any {
				return Number(p1) + 1
			}
		)
	}

	const next = () => {
		window.location.href = goNext()
	}

	const back = () => {
		window.location.href = goBack()
	}

	const plyrVideo =
		videoId && videoProvider ? (
			<Plyr
				ref={ref}
				source={{
					type: 'video',
					sources: [
						{
							src: videoId,
							provider: videoProvider,
						},
					],
				}}
				options={videoOptions}
			/>
		) : null

	return (
		<div>
			{plyrVideo}
			<ButtonWrapper>
				<Button onClick={back}>Before</Button>
				<Button onClick={enterVideo}>Fullscreen</Button>
				<Button onClick={next}>Next</Button>
			</ButtonWrapper>
		</div>
	)
}

export default PlyrComponent
