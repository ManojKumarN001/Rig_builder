import React from 'react'

import Table from '../components/table/Table'

import { Button, TextField, Box, Grid, Paper, styled, MenuItem, Collapse } from '@mui/material'

import customerList from '../assets/JsonData/Prebuild.json'

const customerTableHead = [
    'Id',
    'UsageType',
    'Configuration',
    'Price'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.UsageType}</td>
        <td>{item.Configuration}</td>
        <td>{item.Price}</td>
    </tr>
)

const Recommand = () => {
    return (
        <div>
            {/* <h2 className="page-header">
                customers
            </h2> */}
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                        <Button href='/buy' variant="contained" color="success"  width="50%">BUILD</Button>
                        <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 RIG BUILDER. All Rights Reserved.</h6>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Recommand
