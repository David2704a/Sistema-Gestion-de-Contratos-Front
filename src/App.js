import { useFetch } from './useFetch';
import { fetchData } from './fetchData';
import { Suspense } from 'react';
import Componente from './componente';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import HomeView from './vistas/HomeView';
import UserView from './vistas/UserView';
import ContractsView from './vistas/ContractsView';
import ProfileView from './vistas/ProfileView';



const apiData = fetchData('getUser', 'GET')
function App() {

  // const {data, loading, error, handleCancelRequest} = useFetch('getUser');

  const data = apiData.read();

  return (
    <div className="App">

      <div className='menu-container'>
        <div className='navigation'>
          <ul>
            <li>
              <NavLink to="" activeClassName="active">
              <span className='icon'><i class="fa-solid fa-people-roof"></i>  </span>
              <span className='title'>Contract management</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/home" activeClassName="active">
              <span className='icon'><i class="fa-solid fa-house-chimney"></i></span>
              <span className='title'>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" activeClassName="active">
              <span className='icon'><i class="fa-regular fa-user"></i></span>
              <span className='title'>Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="active">
              <span className='icon'><i class="fa-solid fa-users"></i></span>
              <span className='title'>Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contracts" activeClassName="active">
              <span className='icon'><i class="fa-solid fa-file-signature"></i></span>
              <span className='title'>Contracts</span>
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
          <Route path="/profile" element={<ProfileView />} />
        </Routes>
      </div>
   
    </div>
  );


}

export default App;
