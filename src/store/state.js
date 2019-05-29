const mainState = {
    auth: {
        token: '',
        isAuthenticated: null,
        usuario: {}
    },
    login: {
        shouldShowAlert: false,
        errorMessage:''
    },    
    usuarios: []
};

export default mainState;