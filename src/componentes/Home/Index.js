import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import ButtonAppBar from './AppBar';
import { store } from './../../store/Index';
import { actionLogout } from './../Login/Action';
import ListadoUsuarios from './../Usuarios/ListadoUsuarios';

class Home extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    redirectToLogin = () => {
        this.props.history.push('/login');
    }

    logout =()=> {
        this.props.logout();
        this.props.history.push('/');
    }

    render() {
        const stateRedux = store.getState();
        console.log(stateRedux);
        return (
            <div>
                <ButtonAppBar 
                    goLogin={this.redirectToLogin} 
                    authInfo={stateRedux.authentication}
                    goLogout={this.logout}
                    />    
                <div>
                    {stateRedux.authentication.isAuthenticated ? (<ListadoUsuarios/>) 
                    : (<label className="pageTitleLabel">React Cafe App</label>)}
                    
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        
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
