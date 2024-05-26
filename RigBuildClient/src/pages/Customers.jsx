import React from 'react'
import { useEffect, useState } from 'react'
import Tables from '../component-one/OrderTable/components/Table';
import Axios from 'axios'

// import customerList from '../assets/JsonData/customers-list.json'

// const customerTableHead = [
//     '',
//     'name',
//     'email',
//     'phone',
//     'total orders',
//     'total spend',
//     'location'
// ]

// const renderHead = (item, index) => <th key={index}>{item}</th>

// const renderBody = (item, index) => (
//     <tr key={index}>
//         <td>{item.id}</td>
//         <td>{item.name}</td>
//         <td>{item.email}</td>
//         <td>{item.phone}</td>
//         <td>{item.total_orders}</td>
//         <td>{item.total_spend}</td>
//         <td>{item.location}</td>
//     </tr>
// )

// const Customers = () => {
//     return (
//         <div>
//             <h2 className="page-header">
//                 customers
//             </h2>
//             <div className="row">
//                 <div className="col-12">
//                     <div className="card">
//                         <div className="card__body">
//                             <Table
//                                 limit='10'
//                                 headData={customerTableHead}
//                                 renderHead={(item, index) => renderHead(item, index)}
//                                  bodyData={customerList}
//                                 renderBody={(item, index) => renderBody(item, index)}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

function Customers() {
    const [dataTable, SetDataTable] = useState([]);



const column = [
    { field: "User_ID", heading: 'User_ID', value: 'id' },
    { field: "User name", heading: 'User Name', value: 'Username' },
    { field: "Email", heading: 'Email', value: 'Email' },
    { field: "Birthday", heading: 'Birthday', value: 'birthday' },
]

useEffect(() => {
    console.log("reaching here")
    Axios.get('http://localhost:3001/getuserdata', {
        headers: {
          authorization: document.cookie,
        },
      })
   
    .then(response => SetDataTable(response.data))
    .catch(err => console.log(err))
}, []);

return (
    <div>
        <Tables data={dataTable} column={column} />
    </div>
);

}
export default Customers
