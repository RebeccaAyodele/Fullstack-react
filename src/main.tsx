import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppStateProvider } from './components/hooks/AppStateContext.tsx'

createRoot(document.getElementById('root')!).render(
  <AppStateProvider>
    <StrictMode>
    <App />
  </StrictMode>,
  </AppStateProvider>)