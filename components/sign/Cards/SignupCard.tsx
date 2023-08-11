import BoringAvatar from 'boring-avatars'
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
import { useState } from 'react'
import { supabase } from '../../../config'
import { useRouter } from 'next/router'

const SignupCard = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const router = useRouter()

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault()
		try {
			// const { user, session, error } = await supabase.auth.signUp({
			const { error } = await supabase.auth.signUp({
				email,
				password,
			})
			if (error) throw error
			alert('Signed Up')
			router.push('/')
		} catch (error: any) {
			alert(error.message)
		}
	}
	return (
		<Wrapper>
			<Container>
				<div>
					<AvatarWrapper>
						<BoringAvatar
							size={50}
							name="signup"
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
					<Heading>Signup Here</Heading>
					<Description>to glean your thoughts</Description>
				</div>
				<FormWrapper action="#" method="POST" onSubmit={handleSubmit}>
					<input type="hidden" name="remember" value="true" />
					<Form>
						<FormElement>
							<Input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								placeholder="Email address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</FormElement>
						<FormElement>
							<Input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</FormElement>
					</Form>

					<div>
						<Button type="submit">Signup</Button>
					</div>
				</FormWrapper>
				<Button onClick={() => router.push('/')}>Go Back</Button>
			</Container>
		</Wrapper>
	)
}

export default SignupCard
