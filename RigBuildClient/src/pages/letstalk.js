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
    padding: "50px",
    color: theme.palette.text.secondary,
}));

function Lettalk() {
    const [userid, setUserId] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [rigtype, setRigtype] = useState('');
    const [budget, setBudget] = useState('');
    const [componentseal, setComponentsseal] = useState('');


    const history = useHistory();
    const letstalks = () => {
        if (userid !== '' && email !== '') {
            if (phonenumber !== '' && rigtype !== '') {
                if (budget !== '' && componentseal !== '') {
                    Axios.post('http://localhost:3001/letstalks', {
                        userid: userid,
                        email: email,
                        phonenumber: phonenumber,
                        rigtype: rigtype,
                        budget: budget,
                        componentseal: componentseal,
                    }).then(() => {
                        console.log('Successfully Sent.')
                        alert("successfull Message Sent")
                        history.push('/Login')
                    });

                } else { alert(" fields cannot be empty ") }
            } else { alert(" fields cannot be empty ") }
        } else { alert(" fields cannot be empty ") }
    }



    return (
        <div>
            <h1>Lets Talk And Build Together </h1>
            <Button href='/login' variant="contained" >BACK</Button>
            <Box sx={{ flexGrow: 1, m: 1, gap: 5 }}>      <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>
                        <FormControl m="1" fullWidth>
                            <TextField
                                value={userid}
                                fullWidth
                                margin='normal'
                                varient="outlined"
                                label="User ID"
                                onChange={(event) => setUserId(event.target.value)}>
                            </TextField>
                        </FormControl>
                        <FormControl m="1" fullWidth>
                            <TextField
                                value={email}
                                fullWidth
                                label="Email"
                                onChange={(event) => setEmail(event.target.value)}>
                            </TextField>
                        </FormControl>
                        <FormControl m="1" fullWidth>
                            <TextField
                                value={phonenumber}
                                fullWidth
                                margin='normal'
                                varient="outlined"
                                label="Phone Numner"
                                onChange={(event) => setPhonenumber(event.target.value)}>
                            </TextField>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Rig Type</InputLabel>
                            <Select
                                value={rigtype}
                                label="Rig type"
                                onChange={(event) => setRigtype(event.target.value)}>
                                <MenuItem value={"Education"}>Education</MenuItem>
                                <MenuItem value={"Gaming"}>Gaming</MenuItem>
                                <MenuItem value={"Animation"}>Education</MenuItem>
                                <MenuItem value={"3D Rendering"}>3D Rendering</MenuItem>
                                <MenuItem value={"Mining"}>Mining</MenuItem>
                                <MenuItem value={"Office Work"}>Office Work</MenuItem>

                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Budget</InputLabel>
                            <Select
                                value={budget}
                                label="Budget"
                                onChange={(event) => setBudget(event.target.value)}>
                                <MenuItem value={"25k to 35k"}>25k to 35k</MenuItem>
                                <MenuItem value={"40k to 50k"}>40k to 50k</MenuItem>
                                <MenuItem value={"55k to 60k"}>55k to 60k</MenuItem>
                                <MenuItem value={"70k to 80k"}>70k to 80k</MenuItem>
                                <MenuItem value={"80k to 90k"}>80k to 90k</MenuItem>
                                <MenuItem value={"1 Lakh Above"}>1 Lakh Above</MenuItem>
                                <MenuItem value={"2 to 3 Lakh"}>2 to 3 Lakh</MenuItem>
                                <MenuItem value={"5 to 6 Lakh "}>5 to 6 Lakh Above</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Componets Seal</InputLabel>
                            <Select
                                value={componentseal}
                                label="Componets Seal"
                                onChange={(event) => setComponentsseal(event.target.value)}>
                                <MenuItem value={"With Seal"}>With Seal</MenuItem>
                                <MenuItem value={"without Seal"}>without Seal</MenuItem>
                            </Select>
                        </FormControl>

                    </Item>
                    <Item>
                        <Button onClick={letstalks} variant="contained" >Send</Button>
                        <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 RIG BUILDER. All Rights Reserved.</h6>
                    </Item>
                </Grid>
            </Grid></Box>

        </div>
    )
}

export default Lettalk

