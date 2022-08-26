import styled from 'styled-components'
import { VideoPlyr } from '../../../components/common/Plyr'

const PlyrWrapper = styled.div`
	height: 90vh;
	padding: 2rem 2rem 0 2rem;
`

const Post = () => {
	return (
		<PlyrWrapper>
			<VideoPlyr
				videoId="abWNnHAeO-Q"
				videoProvider="youtube"
			></VideoPlyr>
		</PlyrWrapper>
	)
}

export default Post
