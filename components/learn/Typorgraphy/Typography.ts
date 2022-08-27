import styled from 'styled-components'

export const Heading = styled.h1``

export const Text = styled.p``

export const Poem = styled.blockquote`
	font-family: Georgia, 'Times New Roman', Times, serif;
`

export const Quote = styled.blockquote`
	/* font-weight: 100; */
	/* font-size: 2rem; */
	color: black;
	max-width: 600px;
	line-height: 1.4;
	position: relative;
	margin: 0;
	padding: 0.5rem;
	:before,
	:after {
		position: absolute;
		color: #f1efe6;
		font-size: 8rem;
		width: 4rem;
		height: 4rem;
	}
	:before {
		content: '“';
		left: -8rem;
		top: -2rem;
	}
	:after {
		content: '”';
		right: -5rem;
		bottom: 1rem;
	}
`

export const Cite = styled.cite`
	font-family: Georgia, 'Times New Roman', Times, serif;
	line-height: 3;
	text-align: left;
	:before {
		content: '— ';
	}
`
