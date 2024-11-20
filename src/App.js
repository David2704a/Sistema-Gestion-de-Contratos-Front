import { useFetch } from './useFetch';
import { fetchData } from './fetchData';
import { Suspense } from 'react';
import Componente from './componente';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomeView from './vistas/HomeView';
import UserView from './vistas/UserView';
import ContractsView from './vistas/ContractsView';



const apiData = fetchData('getUser')
function App() {

  // const {data, loading, error, handleCancelRequest} = useFetch('getUser');

  const data = apiData.read();

  return (
    <div className="App">
      <div className={'menu'}>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/contracts">Contratos</Link>
          </li>
        </ul>
      </div>
      <div className={'display'}>
        <Routes>
          <Route path="/home" element={<HomeView />} />
          <Route path="/user" element={<UserView data={data} />} />
          <Route path="/contracts" element={<ContractsView/>} />
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
