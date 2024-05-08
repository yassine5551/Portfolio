import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { ThemeProvider } from '../context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    
  </React.StrictMode>,

)

