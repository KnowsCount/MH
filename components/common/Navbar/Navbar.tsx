import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
	height: 80px;
	background: #000;
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const NavLink = [
	{
		path: '/learn',
		display: 'Learn',
	},
	{
		path: '/podcast',
		display: 'Podcast',
	},
	{
		path: '/submit',
		display: 'Submit',
	},
	{
		path: '/quarterly',
		display: 'Poetry Quarterly',
	},
	{
		path: '/contest',
		display: 'Contest, Awards, and Grants',
	},
	{
		path: '/join',
		display: 'Become a Partner',
	},
]

const StyledLink = styled.a`
	padding: 0rem 2rem;
`

const Navbar = () => {
	return (
		<Nav>
			<div>
				<Link href="/" passHref>
					<StyledLink>Muses' Huggin</StyledLink>
				</Link>
			</div>
			<div>
				{NavLink.map(({ path, display }) => (
					<Link href={path} passHref key={path}>
						<StyledLink>{display}</StyledLink>
					</Link>
				))}
			</div>
		</Nav>
	)
}

export default Navbar
