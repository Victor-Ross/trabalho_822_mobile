import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import firebase from 'firebase';
import 'firebase/auth';

type UsuarioContextProps = {
  user: null;
  signUp: (email: string, password: string) => void;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

type UsuarioContextProviderProps = {
  children: ReactNode;
}

const UsuarioContext = createContext({} as UsuarioContextProps);

const UsuarioProvider = ( { children }: UsuarioContextProviderProps) => {

  const [user, setUser] = useState(null);

  function listenAuth(userState: any) {
    setUser(userState);
  }

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged(listenAuth);
    return listener;
  }, []);


  const signUp = async (email: string, password: string) => {
    const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log(user);
  }

  const signIn = async (email: string, password: string) => {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log(user);
  }
  const signOut = async () => {
    const user = await firebase.auth().signOut();
    console.log('Usuário deslogado com sucesso');
  }


  return (
    <UsuarioContext.Provider value={{
      user,
      signUp, 
      signIn, 
      signOut
    } 
    }>
      {children}
    </UsuarioContext.Provider>
  );
};

export { UsuarioContext, UsuarioProvider };

export const useUsuario = () => {
  return useContext(UsuarioContext);
}