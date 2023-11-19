import Image from 'next/image'
import MyNavbar from './components/Navbar'
import MyFooter from './components/Footer'
import MyContact from './components/Contact'
import MyProducts from './components/Products'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between pt-20 bg-emerald-100">
			<MyNavbar />
			<MyProducts/>
			<MyContact />
			<MyFooter />
		</main>
	)
}
