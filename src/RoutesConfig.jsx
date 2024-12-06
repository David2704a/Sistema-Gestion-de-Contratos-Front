import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LoginView from './vistas/LoginView';
import HomeView from './vistas/HomeView';
import UserView from './vistas/UserView';
import ContractsView from './vistas/ContractsView';
import Layout from './components/Layout';
import ProfileView from './vistas/ProfileView';
import Register from './vistas/Register';

const RoutesConfig = () => (
  <Routes>
    {/* Ruta pública */}
    <Route path="/login" element={<LoginView />} />
    <Route path="/registro" element={<Register />} />

    {/* Rutas protegidas */}
    <Route
      path="/"
      element={
        <PrivateRoute>
          <Layout />
        </PrivateRoute>
      }
    >
      <Route path="home" element={<HomeView />} />
      <Route path="users" element={<UserView />} />
      <Route path="contracts" element={<ContractsView />} />
      <Route path="profile" element={<ProfileView />} />
    </Route>
  </Routes>
);

export default RoutesConfig;
