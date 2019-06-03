import React from 'react';
import { connect } from 'react-redux';
import ButtonAppBar from './ButtonAppBar';
import { store } from './../../store/Index';
import { actionLogout } from './../../actions/loginActions';
import ListadoUsuarios from './../Usuarios/ListadoUsuarios';
import './style.css';
import logo from './../../logo.svg';
import  CrearUsuario from '../Usuarios/CrearUsuario';

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
        const stateRedux = store.getState();
        return (
            <div>
                <ButtonAppBar 
                    goLogin={this.redirectToLogin} 
                    authInfo={stateRedux.authentication}
                    goLogout={this.logout}
                    openUserCreationModal={this.createUser}
                    />    
                <div>
                    {stateRedux.authentication.isAuthenticated ? (<ListadoUsuarios rows={stateRedux.userData.usuarios}/>) 
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
        shouldOpenCreateUserModal: state.modals.shouldOpenCrearUsuarioModal
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logout: () => {
            dispatch(actionLogout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
