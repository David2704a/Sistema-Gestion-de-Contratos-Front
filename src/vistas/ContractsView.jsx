import React from 'react';
import '../styles/contracts.css'
import Title from '../components/title';
import Table from '../components/table';
const ContratosView = () => {

    const columns = [
      
    ];

    const data = [
       
    ];
    return (
        <div className={'ContractsView'}>
            <Title title="CONTRATOS"></Title>

            <div className="contractsContainer">
                <h1>alo</h1>

                <Table columns={columns} data={data} />
            </div>
        </div>
    );
}

export default ContratosView;
