import React, { createContext, useState, useEffect, ReactNode } from "react";
import {
  getAuthToken,
  deleteAuthToken,
  saveAuthToken,
} from "../utils/jwtToken";

interface AuthContextProps {
  isAuthenticated: boolean | null;
  contextLogin: (token: string) => void;
  contextLogout: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  contextLogin: () => {},
  contextLogout: () => {},
  loading: true,
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthToken = async () => {
      const token = await getAuthToken();
      setIsAuthenticated(!!token);
      setLoading(false);
    };

    checkAuthToken();
  }, []);

  const contextLogin = async (token: string) => {
    await saveAuthToken(token);
    setIsAuthenticated(true);
  };

  const contextLogout = async () => {
    await deleteAuthToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, contextLogin, contextLogout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
