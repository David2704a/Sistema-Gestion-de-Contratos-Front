import React from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';

DataTable.use(DT);

const Table = ({ columns = [], data = [] }) => {
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
