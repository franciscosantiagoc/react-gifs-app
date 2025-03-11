import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifExpertsApp } from './GifExpertsApp'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertsApp />
  </StrictMode>,
)
