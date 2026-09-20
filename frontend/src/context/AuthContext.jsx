import { createContext, useContext } from 'react'

const AuthContext = createContext(null)

function AuthProvider({ children }) {
    const user = null
    const isAuthenticated = Boolean(user)

    return (
        <AuthContext value={{ user, isAuthenticated }}>
            {children}
        </AuthContext>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuth должен использоваться внутри AuthProvider')
    }

    return context
}

export {
    AuthProvider,
    useAuth
}