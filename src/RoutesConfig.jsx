import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LoginView from './vistas/LoginView';
import HomeView from './vistas/HomeView';
import UserView from './vistas/UserView';
import ContractsView from './vistas/ContractsView';

const RoutesConfig = () => (
  <Routes>
    {/* Ruta de Login (pública) */}
    <Route path="/login" element={<LoginView />} />

    {/* Rutas protegidas */}
    <Route 
      path="/home" 
      element={
        <PrivateRoute>
          <HomeView />
        </PrivateRoute>
      } 
    />
    <Route 
      path="/user" 
      element={
        <PrivateRoute>
          <UserView />
        </PrivateRoute>
      } 
    />
    <Route 
      path="/contracts" 
      element={
        <PrivateRoute>
          <ContractsView />
        </PrivateRoute>
      } 
    />
  </Routes>
);

export default RoutesConfig;
