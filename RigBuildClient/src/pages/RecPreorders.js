import Axios from 'axios';
import { useEffect, useState } from 'react';
import Tables from '../component-one/OrderTable/components/Table';

function PrerecOrders() {
  const [dataTable, setDataTable] = useState([]);

  // useEffect(() => {
  //   axios('https://jsonplaceholder.typicode.com/users')
  //     .then(res => setDataTable(res.data))
  //     .catch(err => console.log(err))
  // }, []);



  const column = [
    { field: "User_ID",heading: 'User_ID', value: 'User_ID'},
    { field: "Product_ID",heading: 'Product_ID', value: 'product_id' },
    { field: "Email",heading: 'Email', value: 'email' },
    { field: "Address",heading: 'Address', value: 'address' },
    { field: "Rig type",heading: 'Rig Type', value: 'rig_type' },
    { field: "Payment",heading: 'Payment', value: 'payment' },
  ]

  useEffect(() => {
    console.log("reaching here")
    Axios.get('http://localhost:3001/getdataprerec')
      .then(response => setDataTable(response.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="table_heading">
      {/* <h1>GAMING GEARS</h1> */}
      <Tables data={dataTable} column={column} />
    </div>
    );
}

export default PrerecOrders
