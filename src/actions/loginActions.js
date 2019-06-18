import CONSTANTES from '../Constantes';
import axios from 'axios';
import { apiLogin } from '../config/apiUrl';
import qs from 'qs';
import { actionGetUsuarios } from './usuariosActions';
import { actionOpenAlertDialog } from './../actions/modalActions';

export const actionLoginSuccess = values => ({ type: CONSTANTES.LOGIN.LOGIN_SUCCESS, datos: values});
export const actionLogout =()=> ({ type: CONSTANTES.LOGIN.LOGOUT});

export const actionDoLogin = ({email, password}, history) => {
console.log('LOGIN');
  console.log(process.env);
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
            dispatch(actionLoginSuccess(response.data));
            dispatch(actionGetUsuarios());

            history.push('/');
        }
        catch (error) {
          console.log(error.response);
            dispatch(actionOpenAlertDialog(error.response.data.error.message));
        }
    };
  };
