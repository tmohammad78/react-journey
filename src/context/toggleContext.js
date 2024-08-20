import React, { useState } from "react"

const ToggleContext = React.createContext()
ToggleContext.displayName = "ToggleContext"
const ToggleProvider = ({ children }) => {
    const [on,setOn] = useState(false)
    const toggle = () => setOn(!on)
    return (
        <ToggleContext.Provider value={{ on,toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

const useToggle = () => {
    const context = React.useContext(ToggleContext)
    if(context === undefined) {
        throw new Error('useToggle must be used within a <Toggle />')
    }
    return context;
}

export { ToggleProvider, useToggle }