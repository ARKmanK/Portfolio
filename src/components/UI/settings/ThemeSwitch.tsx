import Switch from '@components/UI/Switch'
import Label from '@components/UI/Label'
import { Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const ThemeSwitch = () => {
	const [isPressed, setIsPressed] = useState(false)

	useEffect(() => {
		if (!isPressed) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [isPressed])

	return (
		<div className='flex items-center space-x-2'>
			<Switch checked={isPressed} onCheckedChange={setIsPressed} id='theme-switch' />
			<Label htmlFor='theme-switch'>
				{isPressed ? <Sun color='#f7cc0e' /> : <Sun color='black' />}
			</Label>
		</div>
	)
}

export default ThemeSwitch
