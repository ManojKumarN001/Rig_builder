import * as React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';


import { Button, FormControl, TextField, InputLabel, Select, Box, Grid, Paper, styled, MenuItem, Collapse } from '@mui/material'



import Axios from 'axios';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    padding: "50px",
    margin: 'normal',
    varient: "outlined",
    //height: "12px",
    color: theme.palette.text.secondary,
}));


function Gears() {
    const [userid, setUserId] = useState('');
    const [keyboard, setKeyboard] = React.useState('');
    const [mouse, setMouse] = React.useState("");
    const [headphones, setHeadphones] = React.useState("");
    const [monitor, setMonitor] = React.useState("");
    const [chair, setChair] = React.useState("");


    const history = useHistory();
    const CustomGear = () => {
        if (userid !== '' && keyboard !== '') {
            if (mouse !== '' && headphones !== '') {
                if (monitor !== '' && chair !== '') {
                    Axios.post('http://localhost:3001/CustomGear', {
                        userid: userid,
                        keyboard: keyboard,
                        mouse: mouse,
                        headphones: headphones,
                        monitor: monitor,
                        chair: chair,
                    }).then(() => {
                        console.log('Successfully created custom pc build.')
                        alert("Successfull Build")
                        history.push("/custompay")
                    });

                } else { alert(" fields cannot be empty ") }
            } else { alert(" fields cannot be empty ") }
        } else { alert(" fields cannot be empty ") }
    }



    return (



        <div>
            <h1>Customized Gears</h1>
            <Button href='/login' variant="contained" >BACK</Button>
            <Box sx={{ flexGrow: 1 }}>      <Grid container spacing={2}>
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
                        <FormControl fullWidth>
                            <InputLabel id="Demo- siimple-lable">Mechanical ,Membrane KeyBoard</InputLabel>
                            <Select
                                value={keyboard}
                                margin='normal'
                                varient="outlined"
                                label="Keyboards"
                                helperText="BUILD"
                                onChange={(event) => setKeyboard(event.target.value)}>
                                <MenuItem value={"NONE"}>NONE</MenuItem>
                                <MenuItem value={"ALIENWARE MECHANICAL GAMING KEYBOARD - AW510K (Mechanical)"}>ALIENWARE MECHANICAL GAMING KEYBOARD - AW510K (Mechanical)</MenuItem>
                                <MenuItem value={"Corsair K100 RGB Optical(Membrane)"}>Corsair K100 RGB Optical(Membrane)</MenuItem>
                                <MenuItem value={"Mountain Everest Max(Mechanical)"}>Mountain Everest Max(Mechanical)</MenuItem>
                                <MenuItem value={"G.Skill KM360(Mechanincal)"}>G.Skill KM360(Mechanincal)</MenuItem>
                                <MenuItem value={"Logitech G915 Lightspeed(Membrane)"}>Logitech G915 Lightspeed(Membrane)</MenuItem>
                                <MenuItem value={"Keychron K2 (Version 2)(Mecahnical)"}>Keychron K2 (Version 2)(Mecahnical)</MenuItem>
                                <MenuItem value={"Ducky One 3(Membrane)"}>Ducky One 3(Membrane)</MenuItem>
                                <MenuItem value={"Zebronics(Mechanical)"}>Zebronics(Mechanical)</MenuItem>
                                <MenuItem value={"Razer Cynosa Chroma(Membrane)"}>Razer Cynosa Chroma(Membrane)</MenuItem>
                                <MenuItem value={"Hyper X Fury G910 (Mechanical)"}>Hyper X Fury G910 (Mechanical)</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="Demo- siimple-lable">Gaming Mouse</InputLabel>
                            <Select

                                value={mouse}
                                label="Mouse"
                                onChange={(event) => setMouse(event.target.value)}>
                                <MenuItem value={"NONE"}>NONE</MenuItem>
                                <MenuItem value={"Alienware AW558"}>Alienware AW558</MenuItem>
                                <MenuItem value={"ALienware AM510M"}>ALienware AM510M</MenuItem>
                                <MenuItem value={"ALienware AM610M"}>ALienware AM610M</MenuItem>
                                <MenuItem value={"RAZOR DeathAdder"}>RAZOR DeathAdder</MenuItem>
                                <MenuItem value={"RAZOR Viper"}>RAZOR Viper</MenuItem>
                                <MenuItem value={"RAZOR Naga"}>RAZOR Naga</MenuItem>
                                <MenuItem value={"RAZOR Basilisk"}>RAZOR Basilisk</MenuItem>
                                <MenuItem value={"RAZOR Orochi"}>RAZOR Orochi</MenuItem>
                                <MenuItem value={"RAZOR Pro Click"}>RAZOR Pro Click</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="Demo- siimple-lable">Gaming Headset</InputLabel>
                            <Select
                                value={headphones}
                                label="Headset"
                                margin='normal'
                                varient="outlined"
                                onChange={(event) => setHeadphones(event.target.value)}>
                                <MenuItem value={"NONE"}>NONE</MenuItem>
                                <MenuItem value={"Logitech G435"}>Logitech G435</MenuItem>
                                <MenuItem value={"Logitech G335"}>Logitech G335</MenuItem>
                                <MenuItem value={"Logitech G333"}>Logitech G333</MenuItem>
                                <MenuItem value={"Logitech Pro X"}>Logitech Pro X</MenuItem>
                                <MenuItem value={"Logitech G633S"}>Logitech G633S</MenuItem>
                                <MenuItem value={"Logitech G431"}>Logitech G431</MenuItem>
                                <MenuItem value={"Logitech G331"}>Logitech G331</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="Demo- siimple-lable">4K Gaming Monitor</InputLabel>
                            <Select
                                value={monitor}
                                margin='normal'
                                varient="outlined"
                                label="Monitors"
                                onChange={(event) => setMonitor(event.target.value)}>
                                <MenuItem value={"NONE"}>NONE</MenuItem>
                                <MenuItem value={"Asus ROG Strix XG27UQR - 27 Inch 4K Gaming"}>Asus ROG Strix XG27UQR - 27 Inch 4K Gaming</MenuItem>
                                <MenuItem value={"Asus ROG Strix XG32VC - 32 Inch 125% sRGB"}>Asus ROG Strix XG32VC - 32 Inch 125% sRGB</MenuItem>
                                <MenuItem value={"Asus TUF Gaming VG259QR - 25 Inch"}>Asus TUF Gaming VG259QR - 25 Inch</MenuItem>
                                <MenuItem value={"ASUS ROG Strix XG32VQ - 32 Inch 125% sRGB"}>ASUS ROG Strix XG32VQ - 32 Inch 125% sRGB</MenuItem>
                                <MenuItem value={"Alienware 34 Curved QD-OLED Gaming Monitor - AW3423DW"}>Alienware 34 Curved QD-OLED Gaming Monitor - AW3423DW</MenuItem>
                                <MenuItem value={"Alienware AW2721D Gaming Monitor"}>Alienware AW2721D Gaming Monitor</MenuItem>
                                <MenuItem value={"Alienware AW3821DW"}>Alienware AW3821DW</MenuItem>
                                <MenuItem value={"Alienware AW2720HF Gaming Monitor"}>Alienware AW2720HF Gaming Monitor</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="Demo- siimple-lable">Customize Gamong Chair</InputLabel>
                            <Select
                                value={chair}
                                label="Chair"
                                margin='normal'
                                varient="outlined"
                                onChange={(event) => setChair(event.target.value)}>
                                <MenuItem value={"NONE"}>NONE</MenuItem>
                                <MenuItem value={"RAZER ISKUR - GREEN"}>RAZER ISKUR - GREEN</MenuItem>
                                <MenuItem value={"RAZER LUMBAR Cusior"}>RAZER LUMBAR Cusior</MenuItem>
                                <MenuItem value={"RAZER HEAD CUSHION CHROMA"}>RAZER HEAD CUSHION CHROMA</MenuItem>
                                <MenuItem value={"RAZER UNIVERSAL CHAIR CASTER STUDS"}>RAZER UNIVERSAL CHAIR CASTER STUDS</MenuItem>
                                <MenuItem value={"TEAM RAZER FLOOR RUG"}>TEAM RAZER FLOOR RUG</MenuItem>
                                <MenuItem value={"TEAM RAZER FLOOR MAT"}>TEAM RAZER FLOOR MAT</MenuItem>
                            </Select>
                        </FormControl>


                    </Item>
                    <Item>
                        <Button onClick={CustomGear} variant="contained" >BUILD</Button>
                        <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 RIG BUILDER. All Rights Reserved.</h6>
                    </Item>
                </Grid>
            </Grid></Box>

        </div>
    )
}


export default Gears