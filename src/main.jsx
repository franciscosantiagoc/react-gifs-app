import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifExpertsApp } from './GifExpertsApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertsApp />
  </StrictMode>,
)
