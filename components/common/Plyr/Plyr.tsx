import { useRef } from 'react'
import styled from 'styled-components'
import Plyr, { APITypes } from 'plyr-react'
import 'plyr-react/plyr.css'

const src = 'http://physical-authority.surge.sh/music/1.mp3'
const videoOptions = undefined

const PlyrWrapper = styled.div``

const PlyrComponent = () => {
	const ref = useRef<APITypes>(null)

	const enterVideo = () => {
		;(ref.current?.plyr as Plyr)?.fullscreen.enter()
	}

	const plyrVideo = src ? (
		<Plyr
			ref={ref}
			source={{
				type: 'audio',
				sources: [
					{
						src: src,
						type: 'audio/mp3',
					},
				],
			}}
			options={videoOptions}
		/>
	) : null

	return (
		<PlyrWrapper>
			{plyrVideo}
			{/* <button onClick={enterVideo}>fullscreen</button> */}
		</PlyrWrapper>
	)
}

export default PlyrComponent
