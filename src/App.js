import { useFetch } from './useFetch';
import { fetchData } from './fetchData';
import { Suspense } from 'react';
import axios from 'axios';
import Componente from './componente';


const apiData = fetchData('getUser')
function App() {

  // const {data, loading, error, handleCancelRequest} = useFetch('getUser');

  const data = apiData.read();
  return (
    <div className="App">
      <h1>Data from Laravel API:</h1>
      {/* <Componente
        data={data}
        loading={loading}
        error={error}
        handleCancelRequest={handleCancelRequest}
      /> */}

      <Suspense fallback={<div>Loading...</div>}>
        <ul className="card">
          {data?.users?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}

export default App;
