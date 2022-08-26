import { useRouter } from 'next/router'
import { VideoPlyr } from '../../components/common/Plyr'

const Post = () => {
	const router = useRouter()
	const { pid } = router.query

	return (
		<>
			<p>Post: {pid}</p>
			<VideoPlyr
				videoId="abWNnHAeO-Q"
				videoProvider="youtube"
			></VideoPlyr>
		</>
	)
}

export default Post
