import * as React from 'react'
import { useState, } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, FormControl, InputLabel, TextField, Select, Box, Grid, Paper, styled, MenuItem, Collapse } from '@mui/material'

import Axios from 'axios'



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    margin: "normal",
    padding: "20px",
    color: theme.palette.text.secondary,
}));



function Custompcbuild() {
    const [userid, setUserId] = useState('');
    const [usagetype, setUsagetype] = useState('')
    const [processor, setProcessor] = useState('');
    const [model, setModel] = useState('');
    const [cabin, setCabinet] = useState("");
    const [motherboard, setMotherBoard] = useState('');
    const [gpu, setGraphicsCard] = useState('');
    const [smps, setSMPS] = useState('');
    const [storage, setStorage] = useState('');
    const [ram, setRAM] = useState('');
    const [cooler, setCOOLER] = useState('');

    const history = useHistory();
    const UsersCustombuild = () => {
        if (userid !== '' && usagetype !== '') {
            if (processor !== '' && model !== '') {
                if (cabin !== '' && motherboard !== '') {
                    if (gpu !== '' && smps !== '') {
                        if (storage !== '' && ram !== '') {
                            if (cooler !== '') {
                                Axios.post('http://localhost:3001/UsersCustombuild', {
                                    userid: userid,
                                    usagetype: usagetype,
                                    processor: processor,
                                    model: model,
                                    cabin: cabin,
                                    motherboard: motherboard,
                                    gpu: gpu,
                                    smps: smps,
                                    storage: storage,
                                    ram: ram,
                                    cooler: cooler,

                                }).then(() => {
                                    console.log('Successfully created custom pc build.')
                                    alert("Rig Build Successfull")
                                    history.push("/custompay")
                                });

                            } else { alert(" fields cannot be empty ") }
                        } else { alert(" fields cannot be empty ") }
                    } else { alert(" fields cannot be empty ") }
                } else { alert(" fields cannot be empty ") }
            } else { alert(" fields cannot be empty ") }
        } else { alert(" fields cannot be empty ") }
    }



    return (
        <div>
            <h1>Build Customizely</h1>
            <Button href='/login' variant="contained" >BACK</Button>
            <Box sx={{ flexGrow: 1, gap: 5 }}>      <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>
                        <FormControl m="1" fullWidth>
                            <TextField
                                value={userid}
                                fullWidth

                                label="User ID"
                                onChange={(event) => setUserId(event.target.value)}>
                            </TextField>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Usage type</InputLabel>
                            <Select
                                value={usagetype}
                                label="Usagetype"
                                helperText="BUILD"
                                onChange={(event) => setUsagetype(event.target.value)}>
                                <MenuItem value={"Animation"}>Animation</MenuItem>
                                <MenuItem value={"3D Rendering"}>3D Renderingy</MenuItem>
                                <MenuItem value={"Gaming"}>Gaming</MenuItem>
                                <MenuItem value={"Mining"}>Mining</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Processor</InputLabel>
                            <Select
                                value={processor}
                                label="Processor"
                                onChange={(event) => setProcessor(event.target.value)}>
                                <MenuItem value={"Intel"}>Intel</MenuItem>
                                <MenuItem value={"AMD"}>AMD</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">ProcessorModel</InputLabel>
                            <Select
                                value={model}
                                label="Model"
                                onChange={(event) => setModel(event.target.value)}>
                                <MenuItem value={"i3-10100F 4C 8T"}>i3-10100F 4C 8T</MenuItem>
                                <MenuItem value={"i3-12100F 4C 8"}>i3-12100F 4C 8</MenuItem>
                                <MenuItem value={"i5-10400F 6C 12T"}>i5-10400F 6C 12T</MenuItem>
                                <MenuItem value={"i5-10500H 6C 12T"}>i5-10500H 6C 12T</MenuItem>
                                <MenuItem value={"i7-10700F 8C 16T"}>i7-10700F 8C 16TT</MenuItem>
                                <MenuItem value={"i7-10700F 12C 20T"}>i7-10700F 12C 20T</MenuItem>
                                <MenuItem value={"RYZEN 3 3200G 4C 4T"}>RYZEN 3 3200G 4C 4T</MenuItem>
                                <MenuItem value={"RYZEN 3 3300X 4C 8T"}>RYZEN 3 3300X 4C 8T</MenuItem>
                                <MenuItem value={"RYZEN 5 3500 6C 12T"}>RYZEN 5 3500 6C 12T</MenuItem>
                                <MenuItem value={"RYZEN 5 5600X 6C 12T"}>RYZEN 5 5600X 6C 12T</MenuItem>
                                <MenuItem value={"RYZEN 5 3700X 8C 16T"}>RYZEN 5 3700X 8C 16T</MenuItem>
                                <MenuItem value={"RYZEN 7 5700X 8C 16T"}>RYZEN 7 5700X 8C 16T</MenuItem>
                                <MenuItem value={"RYZEN 7 3700X 8C 16T"}>RYZEN 7 3700X 8C 16T</MenuItem>
                                <MenuItem value={"RYZEN 9 5900X 12C 24T"}>RYZEN 9 5900X 12C 24T</MenuItem>
                                <MenuItem value={"RYZEN 9 5950X 16C 32T"}>RYZEN 9 5950X 16C 32T</MenuItem>

                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Cabinet</InputLabel>
                            <Select
                                value={cabin}
                                label="Cabinet"
                                onChange={(event) => setCabinet(event.target.value)}>
                                <MenuItem value={"GIGABYTE"}>GIGABYTE</MenuItem>
                                <MenuItem value={"NZXT"}>NZXT</MenuItem>
                                <MenuItem value={"ANTEC"}>ANTEC</MenuItem>
                                <MenuItem value={"COOLMASTER"}>COOLMASTER</MenuItem>
                                <MenuItem value={"CORSAIR"}>CORSAIR</MenuItem>
                                <MenuItem value={"DEEPCOOL"}>DEEPCOOL</MenuItem>
                                <MenuItem value={"GALAX"}>GALAX</MenuItem>
                                <MenuItem value={"MSI"}>MSI</MenuItem>
                                <MenuItem value={"THERMALTAKE"}>THERMALTAKE</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">MotherBoard</InputLabel>
                            <Select
                                value={motherboard}
                                label="MotherBoard"
                                onChange={(event) => setMotherBoard(event.target.value)}>
                                <MenuItem value={"B450"}>B450</MenuItem>
                                <MenuItem value={"B550M"}>B550M</MenuItem>
                                <MenuItem value={"B550 A PRO"}>B550 A PRO</MenuItem>
                                <MenuItem value={"B550 GAMING PLUS"}>B550 GAMING PLUS</MenuItem>
                                <MenuItem value={"B550 TORPEDO"}>B550 TORPEDO</MenuItem>
                                <MenuItem value={"X570-GAMING PLUS"}>X570-GAMING PLUS</MenuItem>
                                <MenuItem value={"B550 TOMAHAWK"}>B550 TOMAHAWK</MenuItem>
                                <MenuItem value={"B550I GAMING EDGE WIFI"}>B550I GAMING EDGE WIFI</MenuItem>
                                <MenuItem value={"X570S TOMAHAWK MAX WIFI"}>X570S TOMAHAWK MAX WIFI</MenuItem>
                                <MenuItem value={"X570S TORPEDO MAX"}>X570S TORPEDO MAX</MenuItem>
                                <MenuItem value={"X570-UNIFY WIFI"}>X570-UNIFY WIFI</MenuItem>
                                <MenuItem value={"X570-ACE"}>X570-ACE</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">GraphicsCard</InputLabel>
                            <Select
                                value={gpu}
                                label="GraphicsCard"
                                onChange={(event) => setGraphicsCard(event.target.value)}>
                                <MenuItem value={"I Have My own GPU"}>I Have My own GPU</MenuItem>
                                <MenuItem value={"GT 1030 2GB"}>GT 1030 2GB</MenuItem>
                                <MenuItem value={"GTX 1650 OC 4GB"}>GTX 1650 OC 4GB</MenuItem>
                                <MenuItem value={"RTX 3050 4GB"}>RTX 3050 4GB</MenuItem>
                                <MenuItem value={"RTX 3050 AMP Edtition 8GB"}>RTX 3050 AMP Edtition 8GB</MenuItem>
                                <MenuItem value={"RTX 3060 TWIN EDGE 12GB"}>RTX 3060 TWIN EDGE 12GB</MenuItem>
                                <MenuItem value={"RTX 3060 AMP White EDITION 12GB"}>RTX 3060 AMP White EDITION 12GB</MenuItem>
                                <MenuItem value={"RTX 3060Ti TWIN EDGE 8GB"}>RTX 3060Ti TWIN EDGE 8GB</MenuItem>
                                <MenuItem value={"RTX 3070 TWIN EDGE 8GB"}>RTX 3070 TWIN EDGE 8GB</MenuItem>
                                <MenuItem value={"RTX 3070 Ti TRINITY OC 8GB"}>RTX 3070 Ti TRINITY OC 8GB</MenuItem>
                                <MenuItem value={"RTX 3080 OC Edition 12GB"}>RTX 3080 OC Edition 12GBI</MenuItem>
                                <MenuItem value={"RTX 3080 Ti 16GB"}>RTX 3080 Ti 16GB</MenuItem>
                                <MenuItem value={"RTX 3090 Ti 24GB"}>RTX 3090 Ti 24GB</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">SMPS</InputLabel>
                            <Select
                                value={smps}
                                label="SMPS"
                                onChange={(event) => setSMPS(event.target.value)}>
                                <MenuItem value={"CM MWE 450 W 80 PLUS BRONZE V2"}>CM MWE 450 W 80 PLUS BRONZE V2</MenuItem>
                                <MenuItem value={"CM MWE 550 W 80 PLUS BRONZE V2"}>CM MWE 550 W 80 PLUS BRONZE V2</MenuItem>
                                <MenuItem value={"CM MWE 650 W 80 PLUS BRONZE V2"}>CM MWE 650 W 80 PLUS BRONZE V2</MenuItem>
                                <MenuItem value={"CM MWE 750 WATTS 80 PLUS BRONZE V2"}>CM MWE 750 WATTS 80 PLUS BRONZE V2</MenuItem>
                                <MenuItem value={"CM MWE GOLD V2 650 FULLY MODULAR"}>CM MWE GOLD V2 650 FULLY MODULAR</MenuItem>
                                <MenuItem value={"CM G800 80 PLUS GOLD 800 WATTS"}>CM G800 80 PLUS GOLD 800 WATTS</MenuItem>
                                <MenuItem value={"CM MWE GOLD V2 750 FULLY MODULAR"}>CM MWE GOLD V2 750 FULLY MODULAR</MenuItem>
                                <MenuItem value={"CM MWE GOLD 850 V2 FULLY MOODULR"}>CM MWE GOLD 850 V2 FULLY MOODULR</MenuItem>
                                <MenuItem value={"CM V750 SFX 750 WATTS 80 PLUS GOLD"}>CM V750 SFX 750 WATTS 80 PLUS GOLD</MenuItem>
                                <MenuItem value={"CM MWE 1050 V2 80 PLUS GOLD MODULAR"}>CM MWE 1050 V2 80 PLUS GOLD MODULAR</MenuItem>
                                <MenuItem value={"CM MWE 1250 V2 80 PLUS GOLD MODULAR"}>CM MWE 1250 V2 80 PLUS GOLD MODULAR</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Storage</InputLabel>
                            <Select
                                value={storage}
                                label="Storage"
                                onChange={(event) => setStorage(event.target.value)}>
                                <MenuItem value={"240GB Green"}>240GB Green</MenuItem>
                                <MenuItem value={"SN570 250GB BLUE NVME"}>SN570 250GB BLUE NVME</MenuItem>
                                <MenuItem value={"SN570 500GB BLUE NVME"}>SN570 500GB BLUE NVME</MenuItem>
                                <MenuItem value={"480GB GREEN"}>480GB GREEN</MenuItem>
                                <MenuItem value={"480GB GREEN M.2"}>480GB GREEN M.2</MenuItem>
                                <MenuItem value={"250GB SN770 BLACK NVME GEN4"}>250GB SN770 BLACK NVME GEN4</MenuItem>
                                <MenuItem value={"500GB SN770 BLACK NVME GEN4"}>500GB SN770 BLACK NVME GEN4</MenuItem>
                                <MenuItem value={"SN570 1TB BLUE NVME GEN4"}>SN570 1TB BLUE NVME GEN4</MenuItem>
                                <MenuItem value={"500GB SN850 BLACK NVME GEN4"}>500GB SN850 BLACK NVME GEN4</MenuItem>
                                <MenuItem value={"1TB BLUE M.2"}>1TB BLUE M.2</MenuItem>
                                <MenuItem value={"1TB SN770 BLACK NVME GEN4"}>1TB SN770 BLACK NVME GEN4</MenuItem>
                                <MenuItem value={"1TB SN850 BLACK NVME GEN4"}>1TB SN850 BLACK NVME GEN4</MenuItem>
                                <MenuItem value={"2TB SN570 NVME"}>2TB SN570 NVME</MenuItem>
                                <MenuItem value={"2TB SN850 BLACK NVME GEN4"}>2TB SN850 BLACK NVME GEN4</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">RAM</InputLabel>
                            <Select
                                value={ram}
                                label="RAM"
                                onChange={(event) => setRAM(event.target.value)}>
                                <MenuItem value={"8GB DDR4 3200 MHZ VENGEANCE CL16"}>8GB DDR4 3200 MHZ VENGEANCE CL16</MenuItem>
                                <MenuItem value={"8GB DDR4 3600 MHZ VENGEANCE CL18"}>8GB DDR4 3600 MHZ VENGEANCE CL18</MenuItem>
                                <MenuItem value={"8GB DDR4 3200 MHZ RGB RS CL16"}>8GB DDR4 3200 MHZ RGB RS CL16</MenuItem>
                                <MenuItem value={"16GB DDR4 3000 MHZ VENGEANCE CL16"}>16GB DDR4 3000 MHZ VENGEANCE CL16</MenuItem>
                                <MenuItem value={"16GB DDR4 3200 MHZ VENGEANCE CL16"}>16GB DDR4 3200 MHZ VENGEANCE CL16</MenuItem>
                                <MenuItem value={"16GB(8*2) DDR4 3200 MHZ VENGEANCE CL16"}>16GB(8*2) DDR4 3200 MHZ VENGEANCE CL16</MenuItem>
                                <MenuItem value={"16GB(8*2) DDR4 3600 MHZ VENGEANCE CL18"}>16GB(8*2) DDR4 3600 MHZ VENGEANCE CL18</MenuItem>
                                <MenuItem value={"16GB (16*1) DDR4 3600 MHZ CL18"}>16GB (16*1) DDR4 3600 MHZ CL18</MenuItem>
                                <MenuItem value={"16GB (16*1) DDR4 3200 MHZ RGB RS CL16"}>16GB (16*1) DDR4 3200 MHZ RGB RS CL16</MenuItem>
                                <MenuItem value={"16GB (16*1) DDR4 3200 MHZ RGB RS CL18"}>16GB (16*1) DDR4 3200 MHZ RGB RS CL18</MenuItem>
                                <MenuItem value={"32GB (16*2) DDR4 3000 MHZ VENGENCE CL16"}>32GB (16*2) DDR4 3000 MHZ VENGENCE CL16</MenuItem>
                                <MenuItem value={"32GB (16*2) DDR4 3200 MHZ VENGENCE CL16"}>32GB (16*2) DDR4 3200 MHZ VENGENCE CL16</MenuItem>
                                <MenuItem value={"32GB (8*4) DDR4 3200 MHZ VENGENCE CL16"}>32GB (8*4) DDR4 3200 MHZ VENGENCE CL16</MenuItem>
                                <MenuItem value={"32GB (16*2) DDR4 3600 MHZ VENGENCE CL18"}>32GB (16*2) DDR4 3600 MHZ VENGENCE CL18</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Liquid COOLER</InputLabel>
                            <Select
                                value={cooler}
                                label="COOLER"
                                onChange={(event) => setCOOLER(event.target.value)}>
                                <MenuItem value={"H55 RGB 120 MM"}>H55 RGB 120 MM</MenuItem>
                                <MenuItem value={"HYDRO SERIES H1001 RGB XT 240MM"}>HYDRO SERIES H1001 RGB XT 240MM</MenuItem>
                                <MenuItem value={"HYDRO SERIES H150 RGB 360MM"}>HYDRO SERIES H150 RGB 360MM</MenuItem>
                                <MenuItem value={"CH001 RGB PLATINUM 240MM"}>CH001 RGB PLATINUM 240MM</MenuItem>
                                <MenuItem value={"CH001 ELITI CAPELLIX BLACK"}>CH001 ELITI CAPELLIX BLACK</MenuItem>
                                <MenuItem value={"CH001 ELITI CAPELLIX WHITI"}>CH001 ELITI CAPELLIX WHITI</MenuItem>
                                <MenuItem value={"HYDRO SERIES H1001 RGB PLATINUM SE"}>HYDRO SERIES H1001 RGB PLATINUM SE</MenuItem>
                                <MenuItem value={"H150L ELITI CAPELLIX BLACK"}>H150L ELITI CAPELLIX BLACK</MenuItem>
                                <MenuItem value={"CH100L ELITI CAPELLIX WHITI"}>CH100L ELITI CAPELLIX WHITI</MenuItem>
                                <MenuItem value={"CH170L ELITI CAPELLIX BLACK 420MM"}>CH170L ELITI CAPELLIX BLACK 420MM</MenuItem>
                                <MenuItem value={"C ICUE H150L ELITE LCD BLACK"}>C ICUE H150L ELITE LCD BLACK</MenuItem>
                            </Select>
                        </FormControl>



                    </Item>
                    <Item>
                        <Button onClick={UsersCustombuild}  variant="contained" >BUILD</Button>
                        <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 RIG BUILDER. All Rights Reserved.</h6>
                    </Item>
                </Grid>
            </Grid></Box>

        </div>
    )
}

export default Custompcbuild
