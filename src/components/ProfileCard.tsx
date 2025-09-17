import CountAge from '@data/CountAge'
import { MapPin } from 'lucide-react'

const age = CountAge()

const ProfileCard = () => {
	return (
		<>
			<section className='fixed top-3 left-1/2 -translate-x-1/2 md:left-13 md:top-1/2 md:translate-x-0 transform md:-translate-y-1/2 flex md:flex-col border-2 border-gray-600 md:p-5 p-3 rounded-xl md:rounded-lg lg:rounded-xl lg:w-[23%] md:w-[26%] z-2 card w-[97%]'>
				<div className='flex flex-col md:items-center md:justify-center pt-2 text-center items-center relative'>
					<h1 className='text-white font-semibold md:mt-1 lg:text-xl md:text-base mt-2 text-lg max-w-60'>
						Начинающий Frontend разработчик
					</h1>
					<p className='xl:flex lg:flex-col xl:gap-x-2 text-gray-200 lg:mt-7 md:mt-5 lg:text-lg md:text-sm mt-6 text-base w-[170px] text-center]'>
						Артём Корепанов <span className='text-nowrap'>( {age} )</span>
					</p>
				</div>
				<div className='my-5 bg-cover bg-center flex items-center justify-center'>
					<img
						className='md:rounded-lg lg:rounded-xl lg:size-[95%] w-[170px] h-[150px] xl:size-[90%]'
						src='/my_photo.png'
						alt='my_photo'
					/>
				</div>
				<div className='flex flex-col'>
					<div className='flex xl:ml-9.5 sm:mt-31 sm:ml-3 md:mt-0 md:ml-1 location md:static'>
						<MapPin
							className='lg:w-[20px] lg:h-[20px] md:w-[17px] md:h-[17px] location-icon'
							size={21}
							color='orange'
						/>
						<div className='md:flex flex flex-col'>
							<p className='ml-2 lg:text-base md:text-sm city'>г. Красноярск</p>
							<p className='ml-2 lg:text-base md:text-sm city'>Россия</p>
						</div>
					</div>
				</div>
				<ul className='flex w-full md:flex-col fixed md:static top-55 justify-center sm:gap-x-2 md:mt-5 mt-1 lg:text-base md:text-sm left-1/2 -translate-x-1/2 md:-translate-x-0 social-media-buttons md:items-center'>
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
