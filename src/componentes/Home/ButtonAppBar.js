import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './style.css';
import { connect } from 'react-redux';
import { actionOpenCrearUsuarioModal } from './../../actions/modalActions';

class ButtonAppBar extends React.Component {

  render() {
    return (
      <div className="AppBarRoot">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className="AppBarTitle">            
                {this.props.authInfo.isAuthenticated ? ("Bienvenido, " + this.props.authInfo.usuario.name): ("Bienvenido")}
            </Typography>
            {!this.props.authInfo.isAuthenticated ? (<Button color="inherit" onClick={this.props.goLogin} >Login</Button>)
            :
            <div><Button  variant="contained" onClick={this.props.openCrearUsuarioModal} >Crear Usuario</Button> &nbsp;&nbsp;
            <Button color="secondary" variant="contained" onClick={this.props.goLogout} >Logout</Button></div> }          
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openCrearUsuarioModal: () => {
      dispatch(actionOpenCrearUsuarioModal())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar);
