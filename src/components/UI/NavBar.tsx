import { BookOpenText, User } from 'lucide-react'

const NavBar = () => {
	return (
		<>
			<nav className='fixed md:right-13 right-5 top-1/2 transform -translate-y-1/2 min-w-[40px] h-[180px] bg-gray-600 md:rounded-lg rounded-lg lg:rounded-xl border-2 border-gray-800 z-1'>
				<ul className='flex flex-col justify-center items-center gap-y-2.5 p-2'>
					<li>
						<a className='navButton' href='#'>
							<User className='xl:w-[25px] xl:h-[25px] lg:w-[23px] lg:h-[23px] md:w-[20px] md:h-[20px]' />
						</a>
					</li>
					<li>
						<a className='navButton' href='#skills'>
							<BookOpenText className='xl:w-[25px] xl:h-[25px] lg:w-[23px] lg:h-[23px] md:w-[20px] md:h-[20px]' />
						</a>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default NavBar
