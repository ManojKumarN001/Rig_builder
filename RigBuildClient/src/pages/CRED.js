import * as React from 'react'
import { useState } from 'react';

import { Button, FormControl, InputLabel, TextField, Select, Box, Grid, Paper, styled, MenuItem, Collapse } from '@mui/material'

import Axios from 'axios'
import { useHistory } from 'react-router-dom';



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


function CREDop() {
    const [productid, setProductId] = useState('');
    const [usagetype, setUsagetype] = useState('');
    const [configuration, setConfiguration] = useState('');
    const [price, setPrice] = useState('');


    const history = useHistory();
    const CREDAdd = () => {
        if (productid !== '' && usagetype !== '') {
            if (configuration !== '' && price !== '') {
                Axios.post('http://localhost:3001/CREDAdd', {
                    productid: productid,
                    usagetype: usagetype,
                    configuration: configuration,
                    price: price,
                }).then(() => {
                    console.log('Successfully created custom pc build.')
                    alert("Successfully Producted Added")
                    history.push('/Prebuilt')
                });
            } else { alert("fields cannot be empty") }
        } else { alert("Fields cannot be empty") }
    }


    
    const CREDdelete = () => {
        if (productid !== '') {
            Axios.delete(`http://localhost:3001/CREDdelete/${productid}`, {
                productid: productid,
            }).then(() => {
                console.log('Successfully created custom pc build.')
                alert("Successfully Deleted")
                history.push('/Prebuilt')
            });
        } else { alert("Enter Product ID") }
    }


    const CREDupdate = () => {
        if (productid !== '' && usagetype !== '') {
            if (configuration !== '' && price !== '') {
                Axios.put('http://localhost:3001/CREDupdate', {
                    productid: productid,
                    usagetype: usagetype,
                    configuration: configuration,
                    price: price,
                }).then(() => {
                    console.log('Successfully created custom pc build.')
                    alert("Successfull Updated")
                    history.push('/Prebuilt')
                });

            } else { alert(" fields cannot be empty ") }
        } else { alert(" fields cannot be empty ") }
    }


    return (
        <div>
            <h1>Build Customizely</h1>
            <Box sx={{ flexGrow: 1, gap: 2 }}>      <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>
                        <FormControl m="1" fullWidth>
                            <TextField
                                value={productid}
                                fullWidth
                                margin= 'normal'
                                varient= "outlined"
                                label="Product ID"
                                onChange={(event) => setProductId(event.target.value)}>
                            </TextField>
                        </FormControl>
                        <FormControl m="1" fullWidth>
                            <TextField
                                value={usagetype}
                                fullWidth
                                label="Usage Type"
                                onChange={(event) => setUsagetype(event.target.value)}>
                            </TextField>
                        </FormControl>
                        <FormControl m="1" fullWidth>
                            <TextField
                                value={configuration}
                                fullWidth
                                margin= 'normal'
                                varient= "outlined"
                                label="Configuration"
                                onChange={(event) => setConfiguration(event.target.value)}>
                            </TextField>
                        </FormControl>
                        <FormControl m="1" fullWidth>
                            <TextField
                                value={price}
                                fullWidth
                                label="Price"
                                onChange={(event) => setPrice(event.target.value)}>
                            </TextField>
                        </FormControl>

                    </Item>
                    <Item>
                        <Button onClick={CREDAdd} variant="contained" >ADD</Button>
                    </Item>
                    <Item>
                        <Button onClick={CREDdelete} variant="contained" >Delete</Button>
                    </Item>
                    <Item>
                        <Button onClick={CREDupdate} variant="contained" >UPDATE</Button>
                    </Item>
                </Grid>
            </Grid></Box>

        </div>
    )
}

export default CREDop