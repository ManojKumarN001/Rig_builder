import React, { useState } from "react";
// import './Logtest.css';
import {Button,Snackbar, Link, Alert, sizing,Box,Typography, Checkbox,TextField,Grid,Paper,Avatar} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { MailRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";
import LockResetIcon from "@mui/icons-material/LockReset";

function Forgotpassword() {
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 300,
    margin: "30px auto",
  };

  const avatarStyle = { backgroundColor: "#10bac1", margin: 5 };
  const btnstyle = { margin: "20px 0" };
  const labelstyle = { margin: "10px 0" };

  const [newpassword, setNewpassword] = useState("");
  const [newpassword2, setNewpassword2] =useState("");
  const [newpasswordError, setNewpasswordError] = useState(false);
  const [newpasswordError2, setNewpasswordError2] = useState(false);
  const [passwordmatch, setPasswordmatch] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewpasswordError(false)
    setNewpasswordError2(false)
    setPasswordmatch(false) //Has to be false so that it does not show when password match

    if(newpassword ==''){
      setNewpasswordError(true) 
    }

    if(newpassword2 ==''){
      setNewpasswordError2(true)
    }

    if (newpassword && newpassword2) {
      console.log(newpassword, newpassword2);
    }

    if(newpassword2 !== newpassword){
      console.log("reaching here")
      setPasswordmatch(true)
      
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setPasswordmatch(false);
  };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockResetIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Reset Password
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <Grid style={labelstyle}>
                <TextField
                onChange={(event) => setNewpassword(event.target.value)}
                  variant="outlined"
                  placeholder="Enter a new password"
                  type="text"
                  label="New Password"
                  fullWidth
                  required
                  error={newpasswordError}
                />
              </Grid>
              <TextField
                onChange={(event) => setNewpassword2(event.target.value)}
                type="password"
                label="Re-Enter New Password"
                fullWidth
                required
                error={newpasswordError2}
              />

              <Button
                onClick={handleSubmit}
                type="Submit"
                variant="contained"
                color="primary"
                style={btnstyle}
                size="large"
                endIcon={<LockResetIcon />}
              >
                Reset
              </Button>
              <Snackbar open={passwordmatch} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          This is a error message!
        </Alert>
      </Snackbar>
           
            </form>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default Forgotpassword;
