import React from 'react'
import Link from 'next/link'
import BoringAvatar from 'boring-avatars'
import styled from 'styled-components'
import {
	Wrapper,
	Container,
	AvatarWrapper,
	Heading,
	Description,
	Form,
	FormWrapper,
	FormElement,
	Input,
	Button,
} from './styles'

const TextLink = styled.span`
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	color: #4b5563;
	font-weight: 500;
	border-radius: 0.375rem;
	background-color: transparent;
	text-decoration: none;
	:hover {
		color: #6b7280;
		background-color: #f3f4f6;
	}
	a {
		text-decoration: none;
		color: #4b5563;
	}
`

const MiscWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const RememberMeWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const RememberMe = styled.input`
	color: #4b5563;
	width: 1rem;
	height: 1rem;
	border-radius: 0.25rem;
	border-color: #d1d5db;
`

const RememberMeLabel = styled.label`
	display: block;
	margin-left: 0.5rem;
	color: #111827;
	font-size: 0.875rem;
	line-height: 1.25rem;
`

const ForgotWrapper = styled.div`
	font-size: 0.875rem;
	line-height: 1.25rem;
`

const Forgot = styled.a`
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	background-color: transparent;
	font-weight: 500;
	border-radius: 0.375rem;
	text-decoration: none;
	color: #4b5563;
	:hover {
		color: #6b7280;
		background-color: #f3f4f6;
	}
`

const LoginCard = () => {
	const [state, setState] = React.useState({
		username: '',
		// password: '',
	})

	return (
		<Wrapper>
			<Container>
				<div>
					<AvatarWrapper>
						<BoringAvatar
							size={50}
							name={state.username}
							variant="marble"
							colors={[
								'#D1313D',
								'#E5625C',
								'#F9BF76',
								'#8EB2C5',
								'#615375',
							]}
						/>
					</AvatarWrapper>
					<Heading>Sign In to your account</Heading>
					<Description>
						Or
						<TextLink>
							<Link href="/signup">
								start your journey by creating one
							</Link>
						</TextLink>
					</Description>
				</div>
				<FormWrapper action="#" method="POST">
					<input type="hidden" name="remember" value="true" />
					<Form>
						<FormElement>
							{/* <label htmlFor="username" className="sr-only">
								Username
							</label> */}
							<Input
								id="username"
								name="username"
								type="username"
								autoComplete="username"
								value={state.username}
								onChange={(e) =>
									setState({ username: e.target.value })
								}
								required
								placeholder="Username"
							/>
						</FormElement>
						<FormElement>
							{/* <label htmlFor="password" className="sr-only">
								Password
							</label> */}
							<Input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								placeholder="Password"
							/>
						</FormElement>
					</Form>

					<MiscWrapper>
						<RememberMeWrapper>
							<RememberMe
								id="remember-me"
								name="remember-me"
								type="checkbox"
							/>
							<RememberMeLabel htmlFor="remember-me">
								Remember me
							</RememberMeLabel>
						</RememberMeWrapper>

						<ForgotWrapper>
							<Forgot href="#">Forgot your password?</Forgot>
						</ForgotWrapper>
					</MiscWrapper>

					<div>
						<Button type="submit">Sign In</Button>
					</div>
				</FormWrapper>
				<Button>
					<Link href={'/'}>Go Back</Link>
				</Button>
			</Container>
		</Wrapper>
	)
}

export default LoginCard
