import React from 'react';
// import DataTable from 'datatables.net-react';
// import DT from 'datatables.net-dt';
import DataTable from 'react-data-table-component';
// DataTable.use(DT);

const Table = ({ columns = [], data = [] }) => {
    console.log(columns, 'alooo2', data, 'oaos2');
    
    return (
        <div>
            <DataTable
                columns={columns}
                data={data}
                pagination
                highlightOnHover
                striped
                responsive
            />
        </div>
    );
};

export default Table;
