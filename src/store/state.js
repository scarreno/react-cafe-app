/*const mainState = {
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
*/

const mainState = {
    authentication: {
        token: '',
        isAuthenticated: false,
        usuario: {},
        login: {
            shouldShowAlert: false,
            errorMessage:''
        }
    },
    userData: {
        usuarios: []
    }
};

export default mainState;