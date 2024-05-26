import { useEffect, useState } from 'react';
import Tables from './components/Table';
import Axios from 'axios'

function Table() {
  const [dataTable, setDataTable] = useState([]);




  // const addClientRecord = (user) => {
  //   console.log(user)
  //   Axios.get('http://localhost:3001/getdatafromtable')
  //   .then((response) => {
  //     setDataTable(response.data)
  //       console.log('Successfully created client record.')
  //   }); 


  const column = [
    { field: "User_ID", heading: 'User_ID', value: 'user_ID' },
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
    Axios.get('http://localhost:3001/getdatafromtable')
      .then(response => setDataTable(response.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div >
      {/* <h1>Custom Rig Orders</h1> */}
      <Tables data={dataTable} column={column} />
    </div>
  );
}

export default Table;
