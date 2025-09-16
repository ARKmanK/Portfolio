import CountAge from '@data/CountAge'
import { MapPin } from 'lucide-react'

const age = CountAge()

const ProfileCard = () => {
	return (
		<>
			<section className='fixed top-3 left-1/2 -translate-x-1/2 md:left-13 md:top-1/2 transform md:-translate-y-1/2 flex md:flex-col border-2 border-gray-600 md:p-5 p-3 rounded-xl md:rounded-lg lg:rounded-xl lg:w-[18%] md:w-[22%] z-2 card w-[97%]'>
				<div className='flex flex-col md:items-center md:justify-center pt-2 text-center items-center'>
					<h1 className='text-white font-semibold md:mt-1 lg:text-xl md:text-base mt-2 text-lg max-w-60'>
						Начинающий Frontend разработчик
					</h1>
					<p className='xl:flex xl:gap-x-2 text-gray-200 lg:mt-7 md:mt-5 lg:text-lg md:text-sm mt-6 text-base w-[170px] text-center'>
						Артём Корепанов <span className='md:line-clamp-2 line-clamp-2'>( {age} )</span>
					</p>
				</div>
				<div className='my-5 bg-cover bg-center flex items-center justify-center'>
					<img
						className='md:rounded-lg lg:rounded-xl lg:size-[90%] w-[170px] h-[150px]'
						src='/my_photo.png'
						alt='my_photo'
					/>
				</div>
				<div className='flex flex-col'>
					<div className='flex xl:mx-4.5 lg:mx-3.5 mt-31 ml-3'>
						<MapPin
							className='lg:w-[20px] lg:h-[20px] md:w-[17px] md:h-[17px]'
							size={21}
							color='orange'
						/>
						<div className='md:flex flex flex-col'>
							<p className='ml-2 lg:text-lg md:text-sm'>г. Красноярск</p>
							<p className='ml-2 lg:text-lg md:text-sm'>Россия</p>
						</div>
					</div>
				</div>
				<ul className='sm:fixed top-55 flex w-full justify-center gap-x-6 md:flex-col items-center md:mt-5 lg:text-base md:text-sm'>
					<li>
						<a className='social-media rounded-xl' href='https://tlgg.ru/@miami_shores'>
							Telegram
						</a>
					</li>
					<li>
						<a className='social-media rounded-xl' href='https://vk.com/miami_shores'>
							VK
						</a>
					</li>
					<li>
						<a
							className='social-media rounded-xl'
							href='https://api.whatsapp.com/send?phone=79501480107'
						>
							WhatsApp
						</a>
					</li>
					<li>
						<a className='social-media rounded-xl' href='https://github.com/ARKmanK'>
							GitHub
						</a>
					</li>
				</ul>
			</section>
		</>
	)
}

export default ProfileCard
