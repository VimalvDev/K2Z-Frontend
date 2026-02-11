import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Lenis from 'lenis';

const lenis = new Lenis({
  duration: 1, // Adjust the duration for smoothness
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Default easing
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
)
