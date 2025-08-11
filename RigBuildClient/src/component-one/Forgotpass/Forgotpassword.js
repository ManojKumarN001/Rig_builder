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

  const [username, setUsername] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [newpassword2, setNewpassword2] = useState("");
  const [newpasswordError, setNewpasswordError] = useState(false);
  const [newpasswordError2, setNewpasswordError2] = useState(false);
  const [passwordmatch, setPasswordmatch] = useState(false);
  const [resetResult, setResetResult] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewpasswordError(false);
    setNewpasswordError2(false);
    setPasswordmatch(false);
    setResetResult("");

    if (username === "") {
      setResetResult("Username is required.");
      return;
    }
    if (newpassword === "") {
      setNewpasswordError(true);
      return;
    }
    if (newpassword2 === "") {
      setNewpasswordError2(true);
      return;
    }
    if (newpassword2 !== newpassword) {
      setPasswordmatch(true);
      return;
    }

    // Call backend to reset password
    fetch("http://localhost:3001/resetpassword", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, newPassword: newpassword })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setResetResult("Password reset successful!");
        } else {
          setResetResult(data.message || "Password reset failed.");
        }
      })
      .catch(() => setResetResult("Server error. Please try again later."));
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
                  onChange={(event) => setUsername(event.target.value)}
                  variant="outlined"
                  placeholder="Enter your username"
                  type="text"
                  label="Username"
                  fullWidth
                  required
                />
              </Grid>
              <Grid style={labelstyle}>
                <TextField
                  onChange={(event) => setNewpassword(event.target.value)}
                  variant="outlined"
                  placeholder="Enter a new password"
                  type="password"
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
                type="submit"
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
                  Passwords do not match!
                </Alert>
              </Snackbar>
              {resetResult && (
                <Snackbar open={!!resetResult} autoHideDuration={6000} onClose={() => setResetResult("")}> 
                  <Alert onClose={() => setResetResult("")} severity={resetResult.includes("success") ? "success" : "error"} sx={{ width: '100%' }}>
                    {resetResult}
                  </Alert>
                </Snackbar>
              )}
            </form>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default Forgotpassword;
