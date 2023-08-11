import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { supabase } from '../../../config'
import { useRouter } from 'next/router'
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

/* const MiscWrapper = styled.div`
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
` */

const SignInCard = () => {
	const [loading, setLoading] = useState(false)
	const [email, setEmail] = useState('')
	const [emailSent, setEmailSent] = useState(false)
	const router = useRouter()

	const handleLogin = async (email: string) => {
		try {
			setLoading(true)
			const { error } = await supabase.auth.signInWithOtp({
				email,
			})
			if (error) throw error
			setEmailSent(true)
		} catch (error: any) {
			console.error(error.error_description || error.message)
		} finally {
			setLoading(false)
		}
	}
	return (
		<Wrapper>
			<Container>
				<AvatarWrapper>
					<BoringAvatar
						size={50}
						name="sign in"
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
				{emailSent ? (
					<Description>
						An e-mail has been sent to your e-mail address. Please
						click the link in this mail to sign in.
						<p>
							<Button onClick={() => setEmailSent(false)}>
								Retry
							</Button>
						</p>
					</Description>
				) : (
					<FormWrapper
						onSubmit={(e) => {
							e.preventDefault()
							handleLogin(email)
						}}
					>
						<Form>
							<Description>
								To sign in or create an account, please enter
								your email address. You will receive a magic
								link in your mailbox.
							</Description>
							<Form>
								<FormElement>
									<Input
										id="email"
										type="email"
										placeholder="Email"
										value={email}
										required
										disabled={loading}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</FormElement>
							</Form>
							<Button type="submit" disabled={loading}>
								<span>
									{loading
										? 'Processing…'
										: 'Send magic link'}
								</span>
							</Button>
							{/* <Button onClick={() => router.push('/signup')}>
								Signup
							</Button> */}
						</Form>
					</FormWrapper>
				)}
			</Container>
		</Wrapper>
	)
}

export default SignInCard
