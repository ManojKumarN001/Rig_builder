import * as React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


import { Button, TextField, FormControl, InputLabel, Select, Box, Grid, Paper, styled, MenuItem, handleChange, Collapse } from '@mui/material'

import Axios from 'axios'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    padding: "45px",
    margin: 'normal',
    varient: "outlined",
    color: theme.palette.text.secondary,
}));



function Buy() {
    const [userid, setUserId] = useState('');
    const [productid, SetProductId] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [rigtype, setRigtype] = useState(' ');
    const [payment, setPayment] = useState('');
    const [useriderror, setUseriderror] = useState(false)


    const history = useHistory();
    const Prerecorder = () => {
        if (userid !== '' && productid !== '') {
            if (email !== '' && address !== '') {
                if (rigtype !== '' && payment !== '') {
                    Axios.post('http://localhost:3001/Prerecorder', {
                        userid: userid,
                        productid: productid,
                        email: email,
                        address: address,
                        rigtype: rigtype,
                        payment: payment,

                    }).then(() => {
                        console.log('Successfully created custom order build. ')
                        alert("successfully placed order")
                        history.push('/Login')
                    });

                } 
            } else { alert(" fields cannot be empty ") }
        }
        else {
            alert(" fields cannot be empty")
        }

    }



    return (
        <div>
            <h1 textAlign="center" >Payment </h1>
            <form>
                <Box sx={{ flexGrow: 1, gap: 2 }}>    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Item>
                            <FormControl required fullWidth>
                                <TextField
                                    value={userid}
                                    fullWidth
                                    // margin='normal'
                                    // varient="outlined"
                                    label="User ID"
                                    onChange={(event) => setUserId(event.target.value)}>
                                </TextField>
                            </FormControl>
                            <FormControl  fullWidth>
                                <TextField
                                    value={productid}
                                    fullWidth
                                    required
                                    margin='normal'
                                    varient="outlined"
                                    label="Product ID"
                                    onChange={(event) => SetProductId(event.target.value)}>
                                </TextField>
                            </FormControl>
                            <FormControl fullWidth>
                                <TextField
                                    value={email}
                                    fullWidth
                                    // margin='normal'
                                    // varient="outlined"
                                    required
                                    label="Email"
                                    onChange={(event) => setEmail(event.target.value)}>
                                </TextField>
                            </FormControl>
                            <FormControl fullWidth>
                                <TextField
                                    value={address}
                                    fullWidth
                                    margin='normal'
                                    varient="outlined"
                                    required
                                    label="Address"
                                    onChange={(event) => setAddress(event.target.value)}>
                                </TextField>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Rig type</InputLabel>
                                <Select
                                    value={rigtype}
                                    fullWidth
                                    // margin='normal'
                                    // varient="outlined"
                                    required
                                    label="Rig type"
                                    onChange={(event) => setRigtype(event.target.value)}>
                                    <MenuItem value={"RECOMMANDATION"}>Recommandation</MenuItem>
                                    <MenuItem value={"PRE BUILT"}>Pre Build</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Mode OF Payment</InputLabel>
                                <Select
                                    value={payment}
                                    fullWidth
                                    margin='normal'
                                    varient="outlined"
                                    required
                                    label="Mode OF Payment"
                                    onChange={(event) => setPayment(event.target.value)}>
                                    <MenuItem value={"Cash On Delivery"}>Cash On Delivery</MenuItem>
                                </Select>
                            </FormControl>
                        </Item>
                        <Item>
                            <Button onClick={Prerecorder} variant="contained" color="success" >Place An Order</Button>
                            <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 RIG BUILDER. All Rights Reserved.</h6>
                        </Item>
                    </Grid>
                </Grid></Box></form>
        </div>
    )
}

export default Buy


