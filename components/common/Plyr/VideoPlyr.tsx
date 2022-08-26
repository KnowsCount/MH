import { useRef } from 'react'
import styled from 'styled-components'
import Plyr, { APITypes } from 'plyr-react'
import 'plyr-react/plyr.css'
import { Button } from '../Button'

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

const PlyrComponent = (props: Props) => {
	const videoId = props.videoId
	const videoProvider = props.videoProvider
	const videoOptions = props.videoOptions || undefined

	const ref = useRef<APITypes>(null)

	const enterVideo = () => {
		;(ref.current?.plyr as Plyr)?.fullscreen.enter()
	}

	const test = () => {
		console.log('success')
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
				<Button onClick={test}>Before</Button>
				<Button onClick={enterVideo}>Fullscreen</Button>
				<Button onClick={test}>Next</Button>
			</ButtonWrapper>
		</div>
	)
}

export default PlyrComponent
