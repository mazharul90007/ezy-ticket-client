import { createContext, useState } from "react";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)

    const authInfo = {
        darkMode,
        setDarkMode
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;