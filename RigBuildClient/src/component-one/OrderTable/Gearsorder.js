import { useEffect, useState } from 'react';
import Tables from './components/Table';
import Axios from 'axios'

function Gearsorder() {
  const [dataTable, setDataTable] = useState([]);

  // useEffect(() => {
  //   axios('https://jsonplaceholder.typicode.com/users')
  //     .then(res => setDataTable(res.data))
  //     .catch(err => console.log(err))
  // }, []);


  const column = [
    { Field: "User_id", heading: 'User_ID', value: 'User_ID'},
    { Field: "Keyboard", heading: 'Keyboard', value: 'keyboard' },
    { Field: "Gaming_mouse", heading: 'Mouse', value: 'Gaming_Mouse' },
    { Filed: "Headphones", heading: 'Headphones', value: 'headset' },
    { Field: "Monitor", heading: 'Monitor', value: 'monitor' },
    { Field: "Chair", heading: 'Chair', value: 'chair' },
  ]

  useEffect(() => {
    console.log("reaching here")
    Axios.get('http://localhost:3001/getdatafromordertable')
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

export default Gearsorder
