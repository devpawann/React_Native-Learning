import {createContext, useState} from 'react';
import React from 'react';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: token => {},
  logout: () => {},
});

export default function AuthContextProvider({children}) {
  const [token, setToken] = useState('');

  function authenticate(authToken) {
    console.log('at ctx', authToken);
    setToken(authToken);
  }
  function logout() {
    setToken(null);
  }

  const value = {
    token: token,
    isAuthenticate: !!token,
    authenticate: authenticate,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
