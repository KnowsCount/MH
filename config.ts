import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

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
		path: '/column',
		display: 'Column',
	},
	{
		path: '/quarterly',
		display: 'Poetry Quarterly',
	},
	// {
	// 	path: '/contest',
	// 	display: 'Contest, Awards, and Grants',
	// },
]

export const learnCards: {
	title: string
	path: string
	contentCount: number
}[] = [
	{
		title: 'English Romanticist Poetry 101',
		path: '/learn/erp',
		contentCount: 7,
	},
	{
		title: 'The Old Art of Poesy',
		path: '/learn/poesy',
		contentCount: 5,
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

export const erp: { title: string; path: string }[] = [
	{
		title: 'What is Romanticism?',
		path: '/learn/erp/1',
	},
	{
		title: 'The Two Williams',
		path: '/learn/erp/2',
	},
	{
		title: 'Coleridge',
		path: `learn/erp/3`,
	},
	{
		title: 'Keats',
		path: '/learn/erp/4',
	},
	{
		title: 'Lord Byron',
		path: '/learn/erp/5',
	},
	{
		title: 'Mr and Mrs Shelley',
		path: '/learn/erp/6',
	},
	{
		title: 'The Many Others',
		path: '/learn/erp/6',
	},
]
