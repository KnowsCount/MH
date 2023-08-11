import router from 'next/router'
import { FC } from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { Database } from '../../../types/supabase'
type Profiles = Database['public']['Tables']['profiles']['Row']

interface userProps {
	name?: string
	id?: string
}

const ProfileWrapper = styled.div``

const Button = styled.div`
	color: white;
	margin: 0 10px 0 10px;
	/* font-size: ; */
`

const ProfileArea = styled.div`
	background: none;
	/* padding: 5px 10px 10px 10px; */
	padding: 10px;
	white-space: nowrap;
	text-decoration: none;
	color: #f4f4f4;
	outline: none;
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
`

const NavbarProfile: FC<userProps> = () => {
	const [loading, setLoading] = useState(true)
	const [isLoggedIn, setIsLoggedIn] = useState(true)
	const [username, setUsername] = useState<Profiles['username']>(null)
	const supabase = useSupabaseClient<Database>()
	const user = useUser()

	async function getProfile() {
		try {
			setLoading(true)
			if (!user) throw new Error('No user')

			let { data, error, status } = await supabase
				.from('profiles')
				.select(`username, website, avatar_url`)
				.eq('id', user.id)
				.single()

			if (error && status !== 406) {
				throw error
			}

			if (data) {
				setUsername(data.username)
			}
		} catch (error) {
			alert('Error loading user data!')
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<ProfileWrapper>
			<ProfileArea>
				{!isLoggedIn ? (
					<Button onClick={() => router.push('/signin')}>
						Sign in / Signup
					</Button>
				) : (
					<Button onClick={() => router.push('/account')}>
						Hi, {username || ''}
					</Button>
				)}
			</ProfileArea>
		</ProfileWrapper>
	)
}

export default NavbarProfile
