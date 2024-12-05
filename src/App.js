import { useFetch } from './useFetch';
import { fetchData } from './fetchData';
import { Suspense } from 'react';
import Componente from './componente';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import HomeView from './vistas/HomeView';
import UserView from './vistas/UserView';
import ContractsView from './vistas/ContractsView';



const apiData = fetchData('getUser')
function App() {

  // const {data, loading, error, handleCancelRequest} = useFetch('getUser');

  const data = apiData.read();

  return (
    <div className="App">
      {/* <div className="menu_container">
        <div className="profile-section">
          <div className="icon">🔍</div>
          <span className="profile-text">Profile</span>
        </div>
        <ul >
          <li className="menu-item" activeClassName="active">
            <NavLink to="/home" activeClassName="active">Home <span className="badge">3</span></NavLink>
          </li>
          <li className="menu-item" activeClassName="active">
            <NavLink to="/profile" activeClassName="active">Profile <span className="badge">3</span></NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/user" activeClassName="active">Users <span className="badge">0</span></NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/contracts" activeClassName="active">Contracts <span className="badge">2</span></NavLink>
          </li>
        </ul>
      </div> */}


      <div className='menu-container'>
        <div className='navigation'>
          <ul>
            <li>
              <NavLink to="/home" activeClassName="active">
              <span className='icon'>xxx</span>
              <span className='title'>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="active">
              <span className='icon'>xxx</span>
              <span className='title'>Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contracts" activeClassName="active">
              <span className='icon'><i className="fas fa-coffee"></i></span>
              <span className='title'>Contracts</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" activeClassName="active">
              <span className='icon'>xxx</span>
              <span className='title'>Profile</span>
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
      
      <div className={'display'}>
        <Routes>
          <Route path="/home" element={<HomeView />} />
          <Route path="/users" element={<UserView data={data} />} />
          <Route path="/contracts" element={<ContractsView />} />
          <Route path="/profile" element={<ContractsView />} />
        </Routes>
      </div>
      {/* <Componente
        data={data}
        loading={loading}
        error={error}
        handleCancelRequest={handleCancelRequest}
      /> */}
    </div>
  );


}

export default App;
