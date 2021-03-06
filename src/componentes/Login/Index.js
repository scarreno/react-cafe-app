
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import './style.css';
import { actionDoLogin } from './../../actions/loginActions';
import { actionCloseAlertDialog } from './../../actions/modalActions';
import AlertDialog from '../Genericos/ErrorDialog';
import { withRouter } from "react-router";

class Login extends React.Component {

    constructor(props, context) {
        super(props, context);
        
        this.state = this.initialState;
    }

    initialState = {
        email:'',
        password: '',
        shouldOpenDialog: true
    };

    handleSubmit =()=> {
        this.props.onLogin(this.state, this.props.history);
    }
    onChangeEmail=(event) => {
        this.setState({
            email: event.target.value
        });
    }

    onChangePassword=(event) => {
        this.setState({
            password: event.target.value
        });
    }
    handleBack =()=> {
        this.props.history.push('/');
    }

    render() {
        return (            
            <div className="container">

                
                <AlertDialog shouldOpenDialog={this.props.shouldShowAlert} 
                        title="Error de Conexión" 
                        message={this.props.errorMessage} 
                        handleClose={this.props.closeDialog} 
                        />
                <div className="box">
                        <label className="titleLabel">Ingreso al sistema</label>
                        <TextField name="Email"
                            label="Email"
                            placeholder="Email"
                            className="textField"
                            value={this.state.usuario}
                            onChange={this.onChangeEmail}                            
                        />
                        <TextField name="Password"
                            placeholder="Contraseña"
                            label="Contraseña"
                            className="textField"
                            type="password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    <Button variant="contained" 
                        color="primary" 
                        className="button"
                        onClick={this.handleSubmit}>
                            Sign In
                        </Button>
                    <Button variant="contained" 
                        color="secondary" 
                        className="button"
                        onClick={this.handleBack}>
                            Volver
                        </Button>                        
                </div>
            </div>
        );
    }
}

const mapStateToProps = state  => {
    return {
        errorMessage: state.modals.errorAlert.errorMessage,
        shouldShowAlert: state.modals.errorAlert.shouldShowAlert
    }
}
const mapDispatchToProps = dispatch => ({
    onLogin: (values, history) => {
      dispatch(actionDoLogin(values, history));
    },
    closeDialog: () => {
        dispatch(actionCloseAlertDialog());
      },
  });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
