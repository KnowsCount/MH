import Head from 'next/head'
import styled from 'styled-components'
import { Hero } from '../components/common/Hero'

const Heading = styled.h1`
	color: #000;
	font-size: 10rem;
	font-weight: 900;
`

export default function About() {
	return (
		<>
			<Head>
				<title>Huginn / Column</title>
				<meta name="description" content="poetry!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero>
				<Heading>Column</Heading>
			</Hero>
		</>
	)
}
