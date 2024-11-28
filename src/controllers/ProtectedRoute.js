import { Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useAuth } from './authContext';

export const ProtectedRoute = ({ children }) => {
    const { userData } = useAuth();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, [userData]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!userData) {
        return <Navigate to="/" replace />;
    }

    return children;
};