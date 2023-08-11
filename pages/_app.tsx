import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import { Layout } from '../components/common/Layout'
import { useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'

const theme: DefaultTheme = {
	colors: {
		primary: '#111',
		secondary: '#0070f3',
	},
}

export default function App({
	Component,
	pageProps,
}: AppProps<{
	initialSession: Session
}>) {
	const [supabase] = useState(() => createBrowserSupabaseClient())
	return (
		<SessionContextProvider
			supabaseClient={supabase}
			initialSession={pageProps.initialSession}
		>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</SessionContextProvider>
	)
}
