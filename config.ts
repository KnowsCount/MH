export const NavLink: { path: string; display: string }[] = [
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

export const learnCards: {
	title: string
	path?: string
	contentCount: number
}[] = [
	{
		title: 'Why Learn',
		path: '/learn/erp',
		contentCount: 2,
	},
	{
		title: 'Why Still',
		path: '/learn/erp',
		contentCount: 5,
	},
	{
		title: 'How do I Learn',
		path: '/learn/erp',
		contentCount: 3,
	},
	{
		title: 'What Next?',
		path: '/learn/erp',
		contentCount: 3,
	},
	{
		title: 'Keep Learning',
		path: '/learn/erp',
		contentCount: 9,
	},
	{
		title: "I'll Quit",
		path: '/learn/erp',
		contentCount: 5,
	},
	{
		title: 'Makes Sense',
		path: '/learn/erp',
		contentCount: 1,
	},
]

export const quarterlyCards: { title: string; issueNumber: number }[] = [
	{
		title: 'Life',
		issueNumber: 1,
	},
	{
		title: 'Love',
		issueNumber: 2,
	},
]
