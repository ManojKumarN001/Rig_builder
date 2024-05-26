import Axios from 'axios';
import { useEffect, useState } from 'react';
import Tables from '../component-one/OrderTable/components/Table';

function Talk() {
  const [dataTable, setDataTable] = useState([]);

  // useEffect(() => {
  //   axios('https://jsonplaceholder.typicode.com/users')
  //     .then(res => setDataTable(res.data))
  //     .catch(err => console.log(err))
  // }, []);



  const column = [
    { field: "User_ID",heading: 'User_ID', value: 'User_ID'},
    { field: "Email",heading: 'Email', value: 'Email' },
    { field: "Phonenumber",heading: 'Phonenumber', value: 'phone_number'},
    { field: "Rigtype",heading: 'Rigtype', value: 'rigtype' },
    { field: "Budget",heading: 'Budget', value: 'budget' },
    { field: "Componentseal",heading: 'Componentseal', value: 'component_seal' },
  ]

  useEffect(() => {
    console.log("reaching here")
    Axios.get('http://localhost:3001/getusertalks')
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

export default Talk;