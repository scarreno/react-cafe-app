import CONSTANTES from '../Constantes';
import axios from 'axios';
import { apiGetUsuarios } from '../config/apiUrl';
import { store } from '../store/Index';


export const actionGetUsuariosSuccess = values => ({ type: CONSTANTES.USUARIOS.GET_USUARIOS_SUCCESS, datos: values});
export const actionGetUsuarios = () => {
    return async(dispatch) => {
        
        try{
            const state = store.getState();
            const url = apiGetUsuarios(0,10);
            const config = {
                headers: {
                  'Authorization': state.authentication.token
                }
              };
    
            const response = await axios.get(url, config);
            dispatch(actionGetUsuariosSuccess(response.data.usuarios));
        }
        catch(error){
            
        }        
    }
}