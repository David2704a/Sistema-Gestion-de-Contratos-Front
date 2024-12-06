import React, { useState, useEffect } from 'react';
import Table from '../components/table';

const UserView = () => {
  // Estados para manejar datos, errores y estado de carga
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar datos desde la API
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/getUser'); // Realiza la solicitud
        const result = await response.json(); // Convierte la respuesta a JSON
        setData(result); // Almacena los datos en el estado
      } catch (err) {
        setError(err.message || 'Error al cargar los datos'); // Manejo de errores
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    loadData();
  }, []);

  // Define las columnas para la tabla
  const columns = [
    {
      name: 'ID',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Name',
      selector: (row) => row.name,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
    },
  ];

  // Renderizado condicional basado en el estado
  if (loading) {
    return <div>Loading...</div>; // Muestra un mensaje de carga
  }

  if (error) {
    return <div>Error: {error}</div>; // Muestra un mensaje de error
  }

  return (
    <div>
      <h1>User View</h1>
      <Table columns={columns} data={data?.users || []} /> {/* Muestra la tabla solo si hay datos */}
    </div>
  );
};

export default UserView;
