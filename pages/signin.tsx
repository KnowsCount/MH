import Head from 'next/head'
// import { Layout } from '../components/common/Layout'
import { SignInCard } from '../components/sign/Cards/'
import styled from 'styled-components'
import React, { ReactNode } from 'react'

// export async function getStaticProps() {
// 	// const articles: TArticle[] = ''
// 	const articles = 'articles'
// 	// const navigation: TNavigation[] = await getNavigation()
// }

const Container = styled.div`
	padding: 0 2rem;
`

const SignIn = () => {
	return (
		<Container>
			<Head>
				<title>Sign In | Ephemeral</title>
				<meta
					name="description"
					content="Huginn Sign In Page. Welcome, old friend!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<SignInCard></SignInCard>
		</Container>
	)
}

export default SignIn

SignIn.getLayout = function PageLayout(page: ReactNode) {
	return <>{page}</>
}
