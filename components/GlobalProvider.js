import React, { createContext, useState, useContext, useCallback } from 'react';
import { Alert } from 'react-native';
import { getUser, login, logout, getCurrentUser } from '../server/appwrite';
import { useAppwrite } from '../server/useAppwrite';

const GlobalContext = createContext(undefined);

export const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    data: currentUser,
    loading: currentUserLoading,
    refetch,
  } = useAppwrite({
    fn: getCurrentUser,
  });

  const fetchUser = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const userData = await getUser();
      setUser(userData);
      setIsLoggedIn(!!userData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      Alert.alert("Error", errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const userLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await login();
      if (result) {
        console.log("Logged in successfully");
        setIsLoggedIn(true);
        await fetchUser();
      } else {
        console.log("Failed to login");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      Alert.alert("Error", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = async () => {
    setLoading(true);
    setError(null);

    try {
      await logout();
      setIsLoggedIn(false);
      setUser(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      Alert.alert("Error", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const isLogged = !!currentUser;

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        user: currentUser,
        loading: currentUserLoading || loading,
        refetch,
        userLogin,
        userLogout,
        fetchUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error("useGlobalContext must be used within a GlobalProvider");

  return context;
};

export default GlobalProvider;