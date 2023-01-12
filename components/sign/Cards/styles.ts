import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 3rem;
	padding-bottom: 3rem;
	justify-content: center;
	align-items: center;
	min-height: 100%;
	@media (min-width: 640px) {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}
	@media (min-width: 1024px) {
		padding-left: 2rem;
		padding-right: 2rem;
	}
`

export const Container = styled.div`
	margin-top: 2rem;
	width: 100%;
	max-width: 28rem;
`

export const AvatarWrapper = styled.div`
	width: auto;
	height: 3rem;
	margin-left: auto;
	margin-right: auto;
	margin-top: 3px;
	margin-bottom: 3px;
	text-align: center;
	display: flex;
	justify-content: center;
`

export const Heading = styled.h2`
	color: #111827;
	font-size: 1.875rem;
	line-height: 2.25rem;
	font-weight: 800;
	text-align: center;
`

export const Description = styled.p`
	margin-top: 0.5rem;
	color: #4b5563;
	font-size: 0.875rem;
	line-height: 1.25rem;
	text-align: center;
`

export const Form = styled.div`
	margin-top: -1px;
	border-radius: 0.375rem;
	/* box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); */
`

export const FormWrapper = styled.form`
	margin-top: 2rem;
	margin-top: 1.5rem;
`

export const FormElement = styled.div`
	margin-top: 1rem;
	margin-bottom: 1rem;
`

export const Input = styled.input`
	display: block;
	position: relative;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	padding-left: 0.75rem;
	/* padding-right: 0.75rem; */
	color: #111827;
	color: #6b7280;
	width: 100%;
	border-radius: 0.375rem;
	/* border-top-left-radius: 0.375rem;
	border-top-right-radius: 0.375rem; */
	border-width: 1px;
	border-color: #d1d5db;
	appearance: none;
	:focus {
		outline: 0;
		--ring-color: #000;
		border-color: #000;
		z-index: 10;
	}
	@media (min-width: 640px) {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
`

export const Button = styled.button`
	display: flex;
	position: relative;
	margin-top: 1rem;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	padding-left: 1rem;
	padding-right: 1rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;
	justify-content: center;
	width: 100%;
	border-radius: 0.375rem;
	border-width: 1px;
	border-color: transparent;
	:hover {
		background-color: #f3f4f6;
	}
	:focus {
		outline: 0;
		box-shadow: var(--tw-ring-inset) 0 0 0
			calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
		--ring-offset-width: 2px;
		box-shadow: 0 0 0 var(--ring-offset-width) var(--ring-offset-color),
			var(--ring-shadow);
		--ring-color: #9ca3af;
	}
	a {
		text-decoration: none;
		color: black;
	}
`
