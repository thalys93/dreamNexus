import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './utils/Routes.tsx'
import './assets/css/global.css'
import './assets/css/fonts.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
)
