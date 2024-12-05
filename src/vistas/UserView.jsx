import React from 'react';
import { Suspense } from 'react';
import Table from '../components/table';

const UserView = ({data}) => {

   
    
    const columns = [
      {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
      },
      {
        name: 'Name',
        selector: row => row.name,
      },
      {
        name: 'Email',
        selector: row => row.email,
      },
    ];

    const datas = data.users;
    return (
        <div>
            <h1>User View</h1>


            <Table columns={columns} data={datas} />
        
            {/* <Suspense fallback={<div>Loading...</div>}>
                <ul className="card">
                    {data?.users?.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </Suspense> */}
        </div>
    );
}

export default UserView;
