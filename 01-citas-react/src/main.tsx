import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import './styles.css'

import { PatientProvider } from './context/PatientProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PatientProvider>
      <App />
    </PatientProvider>
  </React.StrictMode>,
)