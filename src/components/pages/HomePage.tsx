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
					<div className='md:ml-[35%] ml-[30%] pt-20'>
						<p
							className='inline-flex justify-center items-center gap-x-3 border-2 border-white rounded-xl pl-2 pr-3 py-1 xl:text-lg lg:text-base md:text-sm'
							id='about'
						>
							<User className='xl:w-[24px] xl:h-[24px] lg:w-[21px] lg:h-[21px] md:w-[18px] md:h-[18px]' />
							About
						</p>
					</div>
					<About />
				</section>
				<section className='min-h-[100vh] bg-img-2'>
					<div className='md:ml-[35%] ml-[30%] pt-20'>
						<p
							className='inline-flex justify-center items-center gap-x-3 border-2 border-white rounded-xl pl-2 pr-3 py-1 xl:text-lg lg:text-base  md:text-sm'
							id='skills'
						>
							<BookOpenText className='lg:w-[21px] lg:h-[21px] md:w-[18px] md:h-[18px]' />
							Skills
						</p>
					</div>
				</section>
			</div>
		</>
	)
}

export default HomePage
