import BoringAvatar from 'boring-avatars'
import Link from 'next/link'
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

const SignupCard = () => {
	return (
		<Wrapper>
			<Container>
				<div>
					<AvatarWrapper>
						<BoringAvatar
							size={50}
							name="KnowsCount Chen"
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
				<FormWrapper action="#" method="POST">
					<input type="hidden" name="remember" value="true" />
					<Form>
						<div>
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<Input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								placeholder="Email address"
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<Input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Password"
							/>
						</div>
					</Form>

					<div>
						<Button type="submit">Signup</Button>
					</div>
				</FormWrapper>
				<Button>
					<Link href={'/'}>Go Back</Link>
				</Button>
			</Container>
		</Wrapper>
	)
}

export default SignupCard
