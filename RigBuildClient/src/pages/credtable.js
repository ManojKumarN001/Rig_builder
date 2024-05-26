import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material'
import Tables from '../component-one/OrderTable/components/Table';

function CredTable() {
  const [dataTable, setDataTable] = useState([]);

  const column = [
    { field: "ProductID",heading: 'ProductID', value: 'Product_ID'},
    { field: "Usage Type",heading: 'Usage Type', value: 'Usage_type' },
    { field: "Configuration",heading: 'Configuration', value: 'Configuration'},
    { field: "Price",heading: 'Price', value: 'Price' },
  ]

  useEffect(() => {
    console.log("reaching here")
    Axios.get('http://localhost:3001/getprebuilddata')
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

export default CredTable;