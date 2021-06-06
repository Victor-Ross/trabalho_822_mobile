import React from 'react';

import Routes from './src/routes';
import { UsuarioProvider } from './src/contexts/usuario';

import './src/services/firebase.js';

export default function App() {
  return (
    <UsuarioProvider>
      <Routes />
    </UsuarioProvider>
  );
}