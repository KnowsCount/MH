import Head from 'next/head'
import styled from 'styled-components'
import { Hero } from '../components/common/Hero'
import { Account } from '@components/profile'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

const Heading = styled.h1`
	color: #000;
	font-size: 10rem;
	font-weight: 900;
`

export default function About() {
	const session = useSession()
	const supabase = useSupabaseClient()
	return (
		<>
			<Head>
				<title>Huginn / Account</title>
				<meta name="description" content="poetry!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero>
				<Account session={session} />
			</Hero>
		</>
	)
}
