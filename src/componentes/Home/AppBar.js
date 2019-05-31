import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>            
              {props.authInfo.isAuthenticated ? ("Bienvenido, " + props.authInfo.usuario.name): ("Bienvenido")}
          </Typography>
          {!props.authInfo.isAuthenticated ? (<Button color="inherit" onClick={props.goLogin} >Login</Button>)
          :
          <div><Button  variant="contained" onClick={props.openUserCreationModal} >Crear Usuario</Button> &nbsp;&nbsp;
          <Button color="secondary" variant="contained" onClick={props.goLogout} >Logout</Button></div> }          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;