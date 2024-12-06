import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LoginView from './vistas/LoginView';
import HomeView from './vistas/HomeView';
import UserView from './vistas/UserView';
import ContractsView from './vistas/ContractsView';
import Layout from './components/Layout';
import ProfileView from './vistas/ProfileView';


const RoutesConfig = () => (
    <Routes>
    {/* Ruta pública: Login */}
    <Route path="/login" element={<LoginView />} />

    {/* Rutas protegidas con Layout */}
    <Route
      path="/"
      element={
          <PrivateRoute>
          <Layout />
        </PrivateRoute>
      }
      >
  
      <Route path="home" element={
              <PrivateRoute>
                <HomeView />
              </PrivateRoute>
        } />
      <Route path="users" element={<UserView  />} />
      <Route path="contracts" element={<ContractsView />} />
      <Route path="profile" element={<ProfileView />} />
      {/* Agrega más rutas según sea necesario */}
    </Route>
  </Routes>
);

export default RoutesConfig;
