import CONSTANTES from '../Constantes';
import axios from 'axios';
import { apiGetUsuarios, 
         apiCreateUsuarios,
         apiEditUsuarios
        } from '../config/apiUrl';
import { store } from '../store/Index';
import qs from 'qs';
import { actionCloseCrearUsuarioModal, actionOpenAlertDialog } from './modalActions';

export const actionGetUsuariosSuccess = values => ({ type: CONSTANTES.USUARIOS.GET_USUARIOS_SUCCESS, datos: values});
export const actionGetUsuariosLoading = show => ({ type: CONSTANTES.USUARIOS.GET_USUARIOS_LOADING, show});
export const actionGetUsuarios = () => {
    return async(dispatch) => {      
        try{
          dispatch(actionGetUsuariosLoading(true));
            const state = store.getState();
            const url = apiGetUsuarios(0,10);
            const config = {
                headers: {
                  'Authorization': state.authentication.token
                }
              };
    
            const response = await axios.get(url, config);
            dispatch(actionGetUsuariosSuccess(response.data.usuarios));
            dispatch(actionGetUsuariosLoading(true));
        }
        catch(error){
            console.log(error);
        }                
    }
}

export const actionCrearUsuarioSuccess = values => ({ type: CONSTANTES.USUARIOS.CREATE_USUARIO_SUCCESS, datos: values});
export const actionCrearUsuarioError = error => ({ type: CONSTANTES.USUARIOS.CREATE_USUARIO_SUCCESS, error});
export const actionCrearUsuario = (usuario) => {
  const state = store.getState();
  
  const config = {
      headers: {
        'Authorization': state.authentication.token
      }
    };
  const requestBody = {
      email: usuario.email,
      name: usuario.name,
      password: usuario.password,
      role: usuario.role,
      google: false,
    };

  return async(dispatch) => {
      
      try{
        const url = apiCreateUsuarios();            
        const response = await axios.post(url, qs.stringify(requestBody), config);
        dispatch(actionGetUsuarios());
        dispatch(actionCrearUsuarioSuccess(response.data));
        dispatch(actionCloseCrearUsuarioModal());
      }
      catch(error){
        dispatch(actionCloseCrearUsuarioModal());
        if(error.response.status===401){
          dispatch(actionOpenAlertDialog(CONSTANTES.DEFAULT_MESSAGES.NOT_AUTHORIZED));
        }else{
          dispatch(actionOpenAlertDialog(error.response.data.err.message));
        }
        
      }        
  }
}

export const actionEditarUsuarioSuccess = values => ({ type: CONSTANTES.USUARIOS.UPDATE_USUARIO_SUCCESS, datos: values});
export const actionEditarUsuarioError = error => ({ type: CONSTANTES.USUARIOS.UPDATE_USUARIO_ERROR, error});
export const actionEditarUsuario = (usuario) => {
  const state = store.getState();
  
  const config = {
      headers: {
        'Authorization': state.authentication.token
      }
    };
  const requestBody = {
      name: usuario.name,
      role: usuario.role,
    };

    return async(dispatch) => {
      try{
        const url = apiEditUsuarios(usuario.id);            
        const response = await axios.put(url, qs.stringify(requestBody), config);
        dispatch(actionGetUsuarios());
        dispatch(actionEditarUsuarioSuccess(response.data));
        dispatch(actionCloseCrearUsuarioModal());
      }
      catch(error){
        dispatch(actionCloseCrearUsuarioModal());
        if(error.response.status===401){
          dispatch(actionOpenAlertDialog(CONSTANTES.DEFAULT_MESSAGES.NOT_AUTHORIZED));
        }else{
          dispatch(actionOpenAlertDialog(error.response.data.err.message));
        }
      }
    }
}