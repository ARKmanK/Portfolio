import { cn } from '@lib/utils'

interface IButtonProps {
	className?: string
	label?: string
}

const Button = ({ className = '', label = '' }: IButtonProps) => {
	return (
		<>
			<button
				className={cn(
					'rounded px-4 py-2 m-1 bg-blue-600 text-white hover:bg-blue-800 cursor-pointer',
					className
				)}
			>
				{label}
			</button>
		</>
	)
}

export default Button
