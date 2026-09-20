import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

import '@fontsource-variable/nunito/wght.css'
import '@fontsource-variable/montserrat/wght.css'
import '@fontsource-variable/noto-sans-jp/wght.css'

import './styles/global.css'
import './styles/layout.css'
import './styles/home.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </StrictMode>
)