import CONSTANTES from '../Constantes';

export const actionOpenCrearUsuarioModal = () => ({ type: CONSTANTES.USUARIOS.OPEN_CREAR_USUARIO_MODAL});
export const actionCloseCrearUsuarioModal = () => ({ type: CONSTANTES.USUARIOS.CLOSE_USUARIO_MODAL});

export const actionOpenEditarUsuarioModal = (usuarioData) => ({ type: CONSTANTES.USUARIOS.OPEN_EDITAR_USUARIO_MODAL, usuarioData});
export const actionCloseEditarUsuarioModal = () => ({ type: CONSTANTES.USUARIOS.CLOSE_USUARIO_MODAL});

export const actionOpenAlertDialog = error => ({ type: CONSTANTES.GENERIC.OPEN_DIALOG, error});
export const actionCloseAlertDialog = () => ({ type: CONSTANTES.GENERIC.CLOSE_DIALOG});