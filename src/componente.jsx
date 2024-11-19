import React from 'react';

const Componente = ({data, loading, error, handleCancelRequest}) => {
    return (
        <div>
            <button onClick={handleCancelRequest}>Cancelar petición</button>
            <ul>
                {error && <li>Error: {error} </li>}
                {loading && <li>Cargando...</li>}
                {data?.users?.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Componente;
