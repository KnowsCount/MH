import Link from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'

interface userProps {
	isLogin: boolean
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

const NavbarProfile: FC<userProps> = ({ isLogin, name }) => {
	return (
		<ProfileWrapper>
			{isLogin ? (
				<ProfileArea>
					<Button>Hi, {name}</Button>
				</ProfileArea>
			) : (
				<ProfileArea>
					<Button>
						<Link href={'/signin'} passHref>
							Sign in
						</Link>
					</Button>{' '}
					| <Button>Sign up</Button>
				</ProfileArea>
			)}
		</ProfileWrapper>
	)
}

export default NavbarProfile
