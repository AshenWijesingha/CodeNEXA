import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='bg-gradient-to-r from-black-100 to-white'>
    <App />
    </div>
  </StrictMode>,
)
