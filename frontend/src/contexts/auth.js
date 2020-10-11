import React, { useState, createContext, useEffect } from 'react';
import api from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  async function signin(values) {

    if (values) {
      try {
        
        const response = await api.post('/users/', values);
        console.log(response);
        const data = response.data;

        setUser(data);
      } catch (error) {

      }
    }
  }

  async function getUser(id) {

    if (id) {
      try {
        
        const response = await api.get(`/users/${id}`);
        console.log(response);
        const data = response.data;

        setUser(data);
        
      } catch (error) {

      }
    }
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signin, getUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;