const obj = {
	21: 'год',
	22: 'года',
	23: 'года',
	24: 'года',
	25: 'лет',
	26: 'лет',
} as const

const CountAge = (): string => {
	const birthDate = new Date('2003-08-05')
	const today: Date = new Date()
	let age: number = today.getFullYear() - birthDate.getFullYear()

	// Проверяем, прошел ли день рождения в этом году
	const isBirthdayPassed: boolean =
		today.getMonth() > birthDate.getMonth() ||
		(today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate())

	if (!isBirthdayPassed) {
		age--
	}

	const ageStr = age.toString()
	const word = obj[ageStr as unknown as keyof typeof obj] || 'лет'

	return `${age} ${word}`
}

export default CountAge
