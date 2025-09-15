import About from '../About'
import ProfileCard from '../ProfileCard'
import NavBar from '../UI/NavBar'
import { BookOpenText, User } from 'lucide-react'

const HomePage = () => {
	return (
		<>
			<div className='w-full relative '>
				<ProfileCard />
				<NavBar />
				<section className='min-h-[100vh] bg-img-1'>
					<div className='ml-[30%] pt-20'>
						<p
							className='inline-flex justify-center items-center gap-x-3 border-2 border-white rounded-xl pl-2 pr-3 py-1 text-lg'
							id='about'
						>
							<User size={22} />
							About
						</p>
					</div>
					<About />
				</section>
				<section className='min-h-[100vh] bg-img-2'>
					<div className='ml-[30%] pt-20'>
						<p
							className='inline-flex justify-center items-center gap-x-3 border-2 border-white rounded-xl pl-2 pr-3 py-1 text-lg'
							id='skills'
						>
							<BookOpenText size={22} />
							Skills
						</p>
					</div>
				</section>
			</div>
		</>
	)
}

export default HomePage
