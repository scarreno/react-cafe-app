import CONSTANTES from './../../Constantes';
import axios from 'axios';
import { apiLogin } from './../../config/apiUrl';
import qs from 'qs';


export const actionLoginSuccess = values => ({ type: CONSTANTES.LOGIN.LOGIN_SUCCESS, datos: values});
export const actionLoginError = error => ({ type: CONSTANTES.LOGIN.LOGIN_ERROR, error});
export const actionOpenDialog = () => ({ type: CONSTANTES.LOGIN.OPEN_DIALOG});
export const actionCloseDialog = () => ({ type: CONSTANTES.LOGIN.CLOSE_DIALOG});
export const actionLogout =()=> ({ type: CONSTANTES.LOGIN.LOGOUT});

export const actionDoLogin = ({email, password}, history) => {
    const requestBody = {
        email: email,
        password
      };
      
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

    return async (dispatch) => {
      try {
            const response = await axios.post(apiLogin, qs.stringify(requestBody), config);
            console.log('success!!!!');
            console.log(response);
            dispatch(actionLoginSuccess(response.data));
            history.push('/');
        }
        catch (error) {
            dispatch(actionLoginError(error.response));
            dispatch(actionOpenDialog());
        }
    };
  };
