import { createRoot } from 'react-dom/client'
import './styles/webflow.css'
import './styles/animations.css'
import './styles/selective-blue.css'
import './styles/routing-fix.css'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)
