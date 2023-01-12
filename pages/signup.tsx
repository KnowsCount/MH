import Head from 'next/head'
import { SignupCard } from '@components/sign/Cards'
import styled from 'styled-components'

const Container = styled.div`
	padding: 0 2rem;
`

const Signup = () => {
	return (
		<Container>
			<Head>
				<title>Signup | Ephemeral</title>
				<meta
					name="description"
					content="Ephemeral Magazine Signup Page. Welcome, my new friend!"
				/>
			</Head>
			<SignupCard />
		</Container>
	)
}

export default Signup
