import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function FormUserDetails({ nextstep, values, setfirstName, setlastName, setEmail }) {

    const proceed = (e) => {
        e.preventDefault();
        nextstep();
    }
    const theme = createTheme({
        status: {
            danger: green[500]
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Enter User Details
                    </Typography>
                </Toolbar>
            </AppBar>
            <br />
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '30ch' },
                }}
            >
                <TextField

                    hintText="Enter you First Name"
                    label="First Name"
                    onChange={(e) => setfirstName(e.target.value)}
                    defaultValue={values.firstName}
                    variant="standard"
                    size="large"
                />
                <br />
                <TextField
                    hintText="Enter you Last Name"
                    label="Last Name"
                    onChange={(e) => setlastName(e.target.value)}
                    defaultValue={values.lastName}
                    variant="standard"
                />
                <br />
                <TextField
                    hintText="Enter you email address"
                    label="Email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    defaultValue={values.email}
                    variant="standard"
                />
                <br />
                <Button
                    primary={true}
                    variant="contained"
                    onClick={proceed}
                    style={styles.button}
                >Continue </Button>

            </Box>
        </ThemeProvider>
    )
}

export default FormUserDetails

const styles = {
    button: {
        margin: 20,

    }
}