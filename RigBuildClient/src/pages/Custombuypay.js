import * as React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, TextField, FormControl, InputLabel, Select, Box, Grid, Paper, styled, MenuItem } from '@mui/material'

import Axios from 'axios'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    backgroundImage: "URL('../background.png')",
    padding: theme.spacing(1),
    textAlign: 'center',
    padding: "10%",
    height: "10px",
    color: theme.palette.text.secondary,
}));





function Custombutpay() {
    const [userid, setUserId] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [rigtype, setRigtype] = useState(' ');
    const [payment, setPayment] = useState('');

    const history = useHistory();
    const Customorderpay = () => {
        if (userid !== '' && email !== '') {
            if (address !== '' && rigtype !== '') {
                if (payment !== '') {
                    Axios.post('http://localhost:3001/Customorderpay', {
                        userid: userid,
                        email: email,
                        address: address,
                        rigtype: rigtype,
                        payment: payment,
                    }).then(() => {
                        console.log('Successfully created custom order build. ')
                        alert("Successfully Order Placed")
                        history.push('/Login')
                    });
                } else { alert(" fields cannot be empty ") }
            } else { alert(" fields cannot be empty ") }
        } else { alert(" fields cannot be empty ") }
    }



    return (
        <div>
            <h1 textAlign="center" >Payment </h1>
            <Box sx={{ flexGrow: 1, }}>    <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>
                        <FormControl m="1" fullWidth>
                            <TextField
                                value={userid}
                                fullWidth
                                margin= 'normal'
                                varient= "outlined"
                                label="User ID"
                                onChange={(event) => setUserId(event.target.value)}>
                            </TextField>
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField
                                value={email}
                                fullWidth
                                // margin= 'normal'
                                // varient= "outlined"
                                label="Email"
                                onChange={(event) => setEmail(event.target.value)}>
                            </TextField>
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField
                                value={address}
                                fullWidth
                                margin= 'normal'
                                varient= "outlined"
                                label="Address"
                                onChange={(event) => setAddress(event.target.value)}>
                            </TextField>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Rig type</InputLabel>
                            <Select
                                value={rigtype}
                                fullWidth
                                label="Rig type"
                                onChange={(event) => setRigtype(event.target.value)}>
                                <MenuItem value={"Custom Build"}>Custom Build</MenuItem>
                                <MenuItem value={"Custom Gears"}>Custom Gears</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Mode OF Payment</InputLabel>
                            <Select
                                value={payment}
                                fullWidth
                                label="Mode OF Payment"
                                onChange={(event) => setPayment(event.target.value)}>
                                <MenuItem value={"Cash On Delivery"}>Cash On Delivery</MenuItem>
                            </Select>
                        </FormControl>
                    </Item>
                    <Item>
                        <Button onClick={Customorderpay} variant="contained" color="success" >Place An Order</Button>
                        <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 RIG BUILDER. All Rights Reserved.</h6>
                    </Item>
                </Grid>
            </Grid></Box>

        </div>
    )
}

export default Custombutpay

