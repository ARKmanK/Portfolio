import { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import HomePage from './components/pages/HomePage'

const App: FC = () => {
	const router = createBrowserRouter(
		[
			{
				path: '/',
				element: <HomePage />,
				errorElement: <>404</>,
			},
		],
		{
			future: {
				/* v7_startTransition: true, */
				/* v7_relativeSplatPath: true, */
			},
		}
	)
	return (
		<MantineProvider>
			<RouterProvider router={router}></RouterProvider>
		</MantineProvider>
	)
}

export default App
