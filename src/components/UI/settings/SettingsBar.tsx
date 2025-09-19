import ThemeSwitch from './ThemeSwitch'

const SettingsBar = () => {
	return (
		<>
			<div className='fixed md:top-2 right-2 px-3 py-1.5 rounded-2xl flex flex-col settings-bar border-2 border-black'>
				<ThemeSwitch />
			</div>
		</>
	)
}

export default SettingsBar
