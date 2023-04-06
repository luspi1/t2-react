import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './modules/App/App'
import { BrowserRouter } from 'react-router-dom'

import './assets/fonts/fonts.scss'
import './assets/styles/main.scss'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
