import { AuthContext } from './auth.js'

function AuthProvider({ children }) {
    const user = null
    const isAuthenticated = Boolean(user)

    return (
        <AuthContext.Provider value={{ user, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider