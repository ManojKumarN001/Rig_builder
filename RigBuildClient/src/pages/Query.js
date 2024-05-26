import Axios from 'axios';
import { useEffect, useState } from 'react';
import Tables from '../component-one/OrderTable/components/Table';

function Query() {
  const [dataTable, setDataTable] = useState([]);

  // useEffect(() => {
  //   axios('https://jsonplaceholder.typicode.com/users')
  //     .then(res => setDataTable(res.data))
  //     .catch(err => console.log(err))
  // }, []);



  const column = [
    { field: "User Name", heading: 'User Name', value: 'Names' },
    { field: "Email", heading: 'Email', value: 'Email' },
    { field: "Message", heading: 'Message', value: 'message' },

  ]

  useEffect(() => {
    console.log("reaching here")
    Axios.get('http://localhost:3001/getuserquery')
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

export default Query;