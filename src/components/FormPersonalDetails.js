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
import { formLabelClasses } from '@mui/material';

function FormPersonalDetails({ nextstep,prevstep, values, setOccupation,setCity,setBio }) {

    const proceed = (e) => {
        e.preventDefault();
        nextstep();
    }
    const back = (e)=>{
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

                    hintText="Enter your Occupation"
                    label="Occupation"
                    onChange={(e) => setOccupation(e.target.value)}
                    defaultValue={values.occupation}
                    variant="standard"
                    size="large"
                />
                <br />
                <TextField
                    hintText="Enter your City"
                    label="City"
                    onChange={(e) => setCity(e.target.value)}
                    defaultValue={values.city}
                    variant="standard"
                />
                <br />
                <TextField
                    hintText="Enter your Bio"
                    label="Bio"
                    onChange={(e) => setBio(e.target.value)}
                    defaultValue={values.setBio}
                    variant="standard"
                />
                <br />
                <Button
                    primary={formLabelClasses}
                    variant="contained"
                    onClick={back}
                    style={styles.button}
                >Go back </Button>
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

export default FormPersonalDetails;

const styles = {
    button: {
        margin: 20,

    }
}