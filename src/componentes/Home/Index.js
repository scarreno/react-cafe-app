import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import ButtonAppBar from './AppBar';
import { store } from './../../store/Index';

class Home extends React.Component {
    redirectToLogin = () => {
        this.props.history.push('/login');
    }

    render() {
        const stateRedux = store.getState();
        console.log(stateRedux);
        return (
            <div>
                <ButtonAppBar goLogin={this.redirectToLogin} authInfo={stateRedux.auth}/>    
                <div>
                    <label className="pageTitleLabel">React Cafe App</label>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        
    };
}

export default connect(mapStateToProps)(Home);
