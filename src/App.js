import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';
import RoutesConfig from './RoutesConfig';


function App() {
  return (
    <AuthProvider>
        <RoutesConfig />
    </AuthProvider>
  );
}

export default App;
