import React, { useState, useEffect } from 'react';
import Table from '../components/table';
import '../styles/users.css';
import { fetchData } from '../fetchData';

const UserView = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetchData('getUser');
        setData(response);
      } catch (err) {
        console.error('Error al obtener datos:', err);
        setError(err.message || 'Error al cargar los datos');
      } finally {
        setLoading(false);
      }
    };

    obtenerDatos();
  }, []);

  const columns = [
    { name: 'ID', selector: (row) => row.id, sortable: true },
    { name: 'Name', selector: (row) => row.name },
    { name: 'Email', selector: (row) => row.email },
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='user_container'>
      <h1>User View</h1>
      <Table columns={columns} data={data?.users || []} />
    </div>
  );
};

export default UserView;
