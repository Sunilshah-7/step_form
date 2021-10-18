import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { List, ListItemText } from '@mui/material';

function Confirm({ nextstep, prevstep, values }) {

    const proceed = (e) => {
        e.preventDefault();
        ///Send your data to backend
        nextstep();
    }
    const back = (e) => {
        e.preventDefault();
        prevstep();
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
                        Confirm User Details
                    </Typography>
                </Toolbar>
            </AppBar>
            <br />
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '30ch' },
                }}
            >
                <List>
                    <ListItemText
                        primary="First Name"
                        secondary={values.firstName}
                    />
                    <ListItemText
                        primary="Last Name"
                        secondary={values.lastName}
                    />
                    <ListItemText
                        primary="Email"
                        secondary={values.email}
                    />
                    <ListItemText
                        primary="Occupation"
                        secondary={values.occupation}
                    />
                    <ListItemText
                        primary="City"
                        secondary={values.city}
                    />
                    <ListItemText
                        primary="Bio"
                        secondary={values.Bio}
                    />
                </List>
                <br />
                <Button
                    primary={false}
                    variant="contained"
                    onClick={back}
                    style={styles.button}
                >Go back </Button>
                <Button
                    primary={true}
                    variant="contained"
                    onClick={proceed}
                    style={styles.button}
                >Confirm & Continue </Button>

            </Box>
        </ThemeProvider>
    )
}

export default Confirm;

const styles = {
    button: {
        margin: 20,

    }
}