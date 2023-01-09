import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './assets/index.css'
import Loader from './components/Loader'
import routes from './routes'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={ store }>
    <React.StrictMode>
      <RouterProvider fallbackElement={<Loader />} router={routes} />
    </React.StrictMode>,
  </Provider>
)
