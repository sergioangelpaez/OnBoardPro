import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userData, setUserDataState] = useState(null);

    const setUserData = (data) => {
        setUserDataState(data);
        localStorage.setItem('userData', JSON.stringify(data));
    };

    useEffect(() => {
        const savedUserData = localStorage.getItem('userData');
        if (savedUserData) {
            setUserDataState(JSON.parse(savedUserData));
        }
    }, []);

    const logout = () => {
        setUserDataState(null);
        localStorage.removeItem('userData');
    };

    return (
        <AuthContext.Provider value={{ userData, setUserData, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};