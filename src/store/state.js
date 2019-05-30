const mainState = {
    auth: {
        token: '',
        isAuthenticated: false,
        usuario: {}
    },
    login: {
        shouldShowAlert: false,
        errorMessage:''
    },    
    usuarios: []
};

export default mainState;