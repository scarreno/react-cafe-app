
const mainState = {
    authentication: {
        token: '',
        isAuthenticated: false,
        usuario: {}        
    },
    userData: {
        usuarios: []
    },
    modals:{
        shouldOpenCrearUsuarioModal: false,
        errorAlert: {
            shouldShowAlert: false,
            errorMessage:''
        }
    }
};

export default mainState;