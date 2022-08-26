import { useRef } from 'react'
import Plyr, { APITypes } from 'plyr-react'
import 'plyr-react/plyr.css'

interface Props {
	videoId: string
	videoProvider: any
	videoOptions?: undefined
}

const PlyrComponent = (props: Props) => {
	const videoId = props.videoId
	const videoProvider = props.videoProvider
	const videoOptions = props.videoOptions || undefined

	const ref = useRef<APITypes>(null)

	const enterVideo = () => {
		;(ref.current?.plyr as Plyr)?.fullscreen.enter()
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
			<button onClick={enterVideo}>fullscreen</button>
		</div>
	)
}

export default PlyrComponent
