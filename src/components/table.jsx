import React from 'react';
// import DataTable from 'datatables.net-react';
// import DT from 'datatables.net-dt';
import DataTable from 'react-data-table-component';
// DataTable.use(DT);
import { useState } from 'react';

const Table = ({ columns = [], data = [] }) => {

const [records, setRecords] = useState(data); 
const handleChange = (e) => {
    const filterRecords = data.filter(record =>{
        return record.name.toLowerCase().includes(e.target.value.toLowerCase());
    })
    setRecords(filterRecords);
}

    return (
        <div>

            <input type="text" 
            onChange={handleChange}
            />
            <DataTable
                columns={columns}
                data={records}
                pagination
                highlightOnHover
                striped
                responsive
            />
        </div>
    );
};

export default Table;
