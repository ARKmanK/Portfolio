import { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
	return <RouterProvider router={router}></RouterProvider>
}

export default App
