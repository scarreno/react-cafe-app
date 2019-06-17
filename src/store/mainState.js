
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
        crearEditarUsuarioModal:{
            shouldOpenCrearEditarUsuarioModal: false,
            usuarioData:null,
            isEditMode: false
        },        
        errorAlert: {
            shouldShowAlert: false,
            errorMessage:''
        }
    }
};

export default mainState;