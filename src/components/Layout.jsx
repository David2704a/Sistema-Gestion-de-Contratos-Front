import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../App.css';


const Layout = () => {
  return (
    <div className="App">
      {/* Menú de navegación */}
      <div className="menu-container">
        <div className="navigation">
          <ul>
            <li>
              <NavLink to="/home" activeClassName="active">
                <span className="icon">🏠</span>
                <span className="title">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="active">
                <span className="icon">👤</span>
                <span className="title">Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contracts" activeClassName="active">
                <span className="icon"><i className="fas fa-coffee"></i></span>
                <span className="title">Contracts</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" activeClassName="active">
                <span className="icon">📄</span>
                <span className="title">Profile</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Área de contenido */}
      <div className="display">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
