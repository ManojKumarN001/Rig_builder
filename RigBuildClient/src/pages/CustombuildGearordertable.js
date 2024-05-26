import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material'
import Tables from '../component-one/OrderTable/components/Table';

function CustomOrderTable() {
  const [dataTable, setDataTable] = useState([]);

  const column = [
    { field: "Usage_type", heading: 'Usage_type', value: 'Usage_type' },
    { field: "Processor", heading: 'Processor', value: 'processor' },
    { field: "Processor_model", heading: 'Processor_model',value: 'processor_model' },
    { field: "Cabin", heading: 'Cabin', value: 'cabin' },
    { field: "Motherboard", heading: 'Motherboard', value: 'motherboard'},
    { field: "GPU", heading: 'GPU', value: 'gpu'},
    { field: "SMPS", heading: 'SMPS',value: 'smps' },
    { field: "Storage", heading: 'Storage',value: 'storage' },
    { field: "RAM", heading: 'RAM',value: 'ram' },
    { field: "COOLER", heading: 'COOLER',value: 'coller' },
  ]

  useEffect(() => {
    console.log("reaching here")
    Axios.get('http://localhost:3001/getuserorderdetails')
      .then(response => setDataTable(response.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="table_heading">
      {/* <h1>GAMING GEARS</h1> */}
      <Tables data={dataTable} column={column} />
    </div>
    );
    <Button  href='/buy' variant="contained" color="success">BUILD</Button>
}

export default CustomOrderTable;