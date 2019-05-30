import React from 'react';
import { connect } from 'react-redux';
import { actionGetUsuarios } from './usuariosActions';


class ListadoUsuarios extends React.Component {
    constructor(props, context) {
        super(props, context);
        
    }

    componentWillMount(){
        this.props.getUsuarios();
    }

    render() {
        return (
            <div>
                hola usuatrios
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getUsuarios: () => {
            dispatch(actionGetUsuarios());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListadoUsuarios);
