import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signin = async (email, password) => {
        // Call your login API
    };

    const signup = async (name, email, password, password_confirmation) => {
        // Call your register API
    };

    const logout = () => {
        setUser(null);
        // Perform logout logic
    };

    return (
        <AuthContext.Provider value={{ user, signin, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
