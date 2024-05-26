import React from 'react'

import Axios from 'axios';
import { useEffect, useState } from 'react';

import Tables from '../component-one/OrderTable/components/Table'

import { Button, TextField, Box, Grid, Paper, styled, MenuItem, Collapse } from '@mui/material'

//import customerList from '../assets/JsonData/data.json'

// const customerTableHead = [
//     'Id',
//     'UsageType',
//     'Configuration',
//     'Price'
// ]

const PreBuilt = () => {
    const [dataTable, setDataTable] = useState([]);

    const column = [
        { field: "ProductID", heading: 'ProductID', value: 'Product_ID' },
        { field: "Usage Type", heading: 'Usage Type', value: 'Usage_type' },
        { field: "Configuration", heading: 'Configuration', value: 'Configuration' },
        { field: "Price", heading: 'Price', value: 'Price' },
    ]
    useEffect(() => {
        console.log("reaching here")
        Axios.get('http://localhost:3001/getprebuilddata')
            .then(response => setDataTable(response.data))
            .catch(err => console.log(err))
    }, []);

    // const renderHead = (item, Button, index) => <th key={index}>{item}</th>

    // const renderBody = (item, index) => (
    //     <tr key={index}>
    //         <td>{item.id}</td>
    //         <td>{item.UsageType}</td>
    //         <td>{item.Configuration}</td>
    //         <td>{item.Price}</td>
    //     </tr>
    // )


    return (
        <div>
            <h2 className="page-header">
                Pre Build Rig
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="table_heading">
                            <Tables data={dataTable} column={column}/>
                        </div>
                        <Button href='/buy' variant="contained" color="success">BUILD</Button>
                        <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 RIG BUILDER. All Rights Reserved.</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreBuilt
