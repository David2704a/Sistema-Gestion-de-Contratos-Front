import React from 'react';
import { Suspense } from 'react';

const UserView = ({data}) => {
    return (
        <div>
            <h1>User View</h1>
        
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

export default UserView;
