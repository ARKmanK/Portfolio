import CountAge from '@data/CountAge'
import { MapPin } from 'lucide-react'

const age = CountAge()

const ProfileCard = () => {
	return (
		<>
			<section className='fixed left-13 top-1/2 transform -translate-y-1/2 flex flex-col border-2 border-gray-600 p-5  md:rounded-lg lg:rounded-xl w-[18%] z-2 card'>
				<div className='flex flex-col items-center justify-center py-2 text-center'>
					<h1 className='text-white font-semibold text-xl'>Начинающий Frontend разработчик</h1>
					<p className='text-gray-200 mt-7'>
						Артём Корепанов <span>( {age} )</span>
					</p>
				</div>
				<div className='my-5 bg-cover bg-center flex items-center justify-center '>
					<img className='md:rounded-lg lg:rounded-xl' src='/my_photo.png' alt='my_photo' />
				</div>
				<div className='flex flex-col'>
					<div className='flex mx-2'>
						<MapPin size={21} />
						<div>
							<p className='ml-2'>г.Красноярск</p>
							<p className='ml-2'>Россия</p>
						</div>
					</div>
				</div>
				<ul className='flex flex-col items-center mt-5'>
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
