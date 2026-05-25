import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Remove StrictMode for production performance:
// StrictMode intentionally double-invokes render to catch side-effects,
// which artificially inflates TBT/TTI during Lighthouse audits.
createRoot(document.getElementById('root')!).render(<App />)
