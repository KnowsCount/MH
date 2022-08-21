import { useState } from 'react'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../BackDrop/BackDrop'

export default function Layout({ children }) {
	const [sideToggle, setSideToggle] = useState(false)
	return (
		<div>
			<Navbar click={() => setSideToggle(true)} show={sideToggle} />
			<SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
			<Backdrop show={sideToggle} click={() => setSideToggle(false)} />
			{children}
			<Footer />
		</div>
	)
}
