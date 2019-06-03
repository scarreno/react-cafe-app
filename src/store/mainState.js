
const mainState = {
    authentication: {
        token: '',
        isAuthenticated: false,
        usuario: {}        
    },
    userData: {
        usuarios: [],
        loadingUsuario: false
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