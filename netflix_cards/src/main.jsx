import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
// import './index.css'
// import { Practices } from './components/Practices.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Practices /> */}
  </StrictMode>,
)
