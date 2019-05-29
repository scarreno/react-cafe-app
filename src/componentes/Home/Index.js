import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import ButtonAppBar from './AppBar';
import { store } from './../../store/Index';

class Index extends React.Component {
    redirectToLogin = () => {
        this.props.history.push('/login');
    }

    render() {
        const stateredux = store.getState();
        console.log(stateredux);
        return (
            <div>
                <ButtonAppBar goLogin={this.redirectToLogin}/>    
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

export default connect(mapStateToProps)(Index);
