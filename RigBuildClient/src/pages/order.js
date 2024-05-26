import * as React from 'react'
import { useState, useEffect } from 'react';

import { Button, FormControl, InputLabel, TextField, Select, Box, Grid, Paper, styled, MenuItem, Collapse } from '@mui/material'

import Axios from 'axios'
import { useHistory } from 'react-router-dom';
import Tables from '../component-one/OrderTable/components/Table';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    padding: "20px",
    margin: 'normal',
    varient: "outlined",
    color: theme.palette.text.secondary,
}));



function Order() {
    const [userid, setUserID] = useState('');
    const [dataTable, setDataTable] = useState([]);
    const [dataTable2, setDataTable2] = useState([]);
    const [dataTable3, setDataTable3] = useState([]);

    const history = useHistory();

    const CustombuildgearsOrderDetails = () => {
        if (userid !== '') {
                Axios.get('http://localhost:3001/CustombuildgearsOrderDetails?userid='+userid, {
                    userid: userid,
                }).then((response) => {
                    setDataTable(response.data[0]['value'])
                    setDataTable2(response.data[1]['value'])
                    setDataTable3(response.data[2]['value'])
                })
                .catch(err => console.log(err))
            }else {alert("field cannot be empty")};

        }

  

    const column = [
        { field: "User_ID", heading: 'User ID', value: 'user_ID'},
        { field: "Usage_type", heading: 'Usage_type', value: 'Usage_type' },
        { field: "Processor", heading: 'Processor', value: 'processor' },
        { field: "Processor_model", heading: 'Processor_model', value: 'processor_model' },
        { field: "Cabin", heading: 'Cabin', value: 'cabin' },
        { field: "Motherboard", heading: 'Motherboard', value: 'motherboard' },
        { field: "GPU", heading: 'GPU', value: 'gpu' },
        { field: "SMPS", heading: 'SMPS', value: 'smps' },
        { field: "Storage", heading: 'Storage', value: 'storage' },
        { field: "RAM", heading: 'RAM', value: 'ram' },
        { field: "COOLER", heading: 'COOLER', value: 'coller' },
    ]

    const column2 = [
        { field: "User_ID", heading: 'User ID', value: 'User_ID'},
        { field: "Keyboard", heading: 'Keyboard', value: 'keyboard'},
        { field: "Gaming Mouse", heading: 'Gaming Mouse', value: 'Gaming_Mouse'},
        { field: "Headset", heading: 'Headset', value: 'headset'},
        { field: "Monitor", heading: 'Monitor', value: 'monitor'},
        { field: "Chair", heading: 'Chair', value: 'chair'}
    ]

    const column3 = [
        { field: "User_ID", heading: 'User ID', value: 'User_ID'},
        { field: "Product ID", heading: 'Product ID', value: 'product_id'},
        { field: "Email", heading: 'Email', value: 'email'},
        { field: "Address", heading: 'Address', value: 'address'},
        { field: "Rig Type", heading: 'Rig Type', value: 'rig_type'},
        { field: "Payment", heading: 'Payment', value: 'payment'}

    ]

    return (
        <div>
            <h1>Order Details</h1>
            <Button href='/login' variant="contained" >BACK</Button>
            <Box sx={{ flexGrow: 1, gap: 2 }}>      <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>
                        <FormControl m="1" fullWidth>
                            <TextField
                                value={userid}
                                fullWidth
                                margin='normal'
                                varient="outlined"
                                label="Enter Vaild User ID"
                                onChange={(event) => setUserID(event.target.value)}>
                            </TextField>
                        </FormControl>
                    </Item>
                    {/* <Item>
                        <Button onClick={PreRecOrderDetails} variant="contained" >Search</Button>
                    </Item> */}
                    <Item>
                        <Button onClick={CustombuildgearsOrderDetails} variant="contained" >Search</Button>
                    </Item>
                </Grid>
            </Grid></Box>
            <h2>Customised built</h2>
            <Tables data={dataTable} column={column} />
            <hr />
            <h2>Customised gears</h2>
            <Tables data={dataTable2} column={column2} />
            <hr />
            <h2>Recommendation Pre Built</h2>
            <Tables data={dataTable3} column={column3} />

        </div>
    )
}

export default Order