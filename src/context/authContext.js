
import React  from "react"

const AuthContext = React.createContext()

function useAuth () {
    const context = React.useContext(AuthContext)
    if(context === undefined) {
        throw new Error('useAuth must be used within a <AuthProvider />')
    }
    return context;
}

function AuthProvider({ children }) {
    const [user,setUser] = React.useState()
    const addUser = (user) => setUser(user)
    return (
        <AuthContext.Provider value={{user,addUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider , useAuth }