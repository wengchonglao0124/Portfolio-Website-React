import React, { createContext, useState, useContext } from 'react';


const ErrorContext = createContext();

export const useError = () => useContext(ErrorContext);

export const ErrorProvider = ({ children }) => {
    const [error, setError] = useState(null);

    const addError = (error) => {
        if (error instanceof Error) {
            setError(error);
        } else {
            setError(new Error(error.toString()));
        }
    };

    const clearError = () => {
        setError(null);
    };

    return (
        <ErrorContext.Provider value={{ error, addError, clearError }}>
            {children}
        </ErrorContext.Provider>
    );
};
