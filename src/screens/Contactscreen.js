import React,{useState} from 'react';
import useStyles from './styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { TextField, Button, Typography, Paper } from '@material-ui/core';

const themeLight = createTheme({
  palette: {
    background: {
      default: '#3f51b5',
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage:
            "url(https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png)"
        }
      }
    }
  }
});

const Contactscreen = () => {
    const [status, setStatus] = useState("Submit");
    const [formData, setFormData] = useState({ Name: '', Email: '', Message: ''});
    const classes = useStyles();
    const handleSubmit = async (e) => {
        e.preventDefault();
     }
    return(
      <MuiThemeProvider theme={themeLight}>
      <CssBaseline />
        <div className={classes.root}>
                <Paper className={classes.paper}>
        <form style={{color:'white', align:'right'}} autoComplete="on" noValidate className={classes.form} onSubmit={handleSubmit}>
          <Typography variant="h6"> Contact Us</Typography>
          <TextField name="Name" variant="outlined" value={formData.Name} onChange={(e) => setFormData({...formData,Name: e.target.value})}  label="Name" fullWidth />
          <TextField name="Email" variant="outlined" value={formData.Email}  onChange={(e) => setFormData({...formData,Email: e.target.value})}  label="Email" fullWidth />
          <TextField label="Message" value={formData.Message}  onChange={(e) => setFormData({...formData,Message: e.target.value})} fullWidth multiline rows={5}/>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Submit</Button>
        </form>
  </Paper>
        </div>
        </MuiThemeProvider>
        )
}

export default Contactscreen;
