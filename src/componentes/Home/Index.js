import React from 'react';
import { connect } from 'react-redux';
import ButtonAppBar from './ButtonAppBar';
import { actionLogout } from './../../actions/loginActions';
import ListadoUsuarios from './../Usuarios/ListadoUsuarios';
import './style.css';
import logo from './../../logo.svg';
import  CrearUsuario from '../Usuarios/CrearUsuario';
import AlertDialog from './../Genericos/ErrorDialog';
import { actionCloseAlertDialog } from './../../actions/modalActions';

class Home extends React.Component {

    constructor(props){
        super(props);

        this.state={
            openModal: false
        };
    }
    redirectToLogin = () => {
        this.props.history.push('/login');
    }

    logout =()=> {
        this.props.logout();
        this.props.history.push('/');
    }

    createUser =()=> {
        this.setState({openModal: true});
    }
    render() {

        console.log('Render HOME');

        return (
            <div>
                <AlertDialog shouldOpenDialog={this.props.shouldShowAlert} 
                        title="Error" 
                        message={this.props.errorMessage} 
                        handleClose={this.props.closeDialog} 
                        />

                <ButtonAppBar 
                    goLogin={this.redirectToLogin} 
                    authInfo={this.props.authentication}
                    goLogout={this.logout}
                    openUserCreationModal={this.createUser}
                    />    
                <div>
                    {this.props.authentication.isAuthenticated ? (<ListadoUsuarios rows={this.props.usuarios}/>) 
                    : 
                    (<div><label className="pageTitleLabel">React Cafe App</label> <br/>
                    <img src={logo} className="App-logo" alt="logo" /></div>)}
                    
                </div>
                <CrearUsuario shouldOpenCreateUserModal={this.props.shouldOpenCreateUserModal}/>                
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        shouldOpenCreateUserModal: state.modals.shouldOpenCrearUsuarioModal,
        errorMessage: state.modals.errorAlert.errorMessage,
        shouldShowAlert: state.modals.errorAlert.shouldShowAlert,
        usuarios: state.userData.usuarios,
        authentication: state.authentication
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logout: () => {
            dispatch(actionLogout());
        },
        closeDialog: () => {
            dispatch(actionCloseAlertDialog());
          },        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
