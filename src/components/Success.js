import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Success() {
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
                        Success
                    </Typography>
                </Toolbar>

            </AppBar>
            <br />
            <h1>Thank you for submitting.</h1>
            <p>You will get an email for futher instruction. Check your email.</p>

        </ThemeProvider>
    )
}

export default Success;
