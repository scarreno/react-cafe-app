import React from 'react';
import Select from '@material-ui/core/Select';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Button,
    FormControl,
    MenuItem,
    InputLabel,
    Input,
    FormHelperText,
    DialogActions,
    TextField
  } from '@material-ui/core'; 
import { connect } from 'react-redux';
import { actionCloseCrearUsuarioModal } from '../../actions/modalActions';
import { actionCrearUsuario, actionEditarUsuario } from '../../actions/usuariosActions';
import validator from 'email-validator';

const defaultState = {
  id: '',
  email: '',
  name: '',
  role:  'sel',
  password:'',
  errorfields: {}
};

class CrearEditarUsuario extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = defaultState;
    }

    handleSubmit = () =>{      
      if(!this.props.isEditMode){
        this.crearUsuario();
      }else{
        this.editarUsuario();
      }
      
    }    
    handleClose = () => {
      this.setState(defaultState);
      this.props.closeModal();
    }    
    handleNameChange = (event) => {
      this.setState({ name: event.target.value})
    }
    handleEmailChange = (event) => {
      this.setState({ email: event.target.value})
    }
    handleRolChange = (event) => {
      this.setState({ role: event.target.value})
    } 
    handlePasswordChange = (event) => {
      this.setState({ password: event.target.value})
    } 
    handleClick =()=>{
      console.log(this.props);
    }

    handleLoad =()=>{
      if(this.props.isEditMode){
        const newstate= {
          id: this.props.usuarioData.id,
          email: this.props.usuarioData.email,
          name: this.props.usuarioData.name,
          role:  this.props.usuarioData.role,
        };
        this.setState(newstate);
      }
    }

    formValidation =(isEdit) => {
      let errors = {};
      let formIsValid = true;

      if (!this.state.name) {
        errors["name"] = "Debe ingresar un nombre";
        formIsValid = false;
      }
  
      if (!this.state.email) {
        errors["email"] = "Debe ingresar un email";
        formIsValid = false;
      }else if(!validator.validate(this.state.email)){
        errors["email"] = "Email no válido";
        formIsValid = false;
      }

      if(!isEdit){
        if (!this.state.password) {
          errors["password"] = "Debe ingresar contraseña";
          formIsValid = false;
        }
      }
      if (!this.state.role || this.state.role==='sel') {
        errors["role"] = "Debe seleccionar un rol";
        formIsValid = false;
      }

      this.setState({ errorfields: errors });

      return formIsValid;
    }

    onBlurEmail =()=>{
      let errors = {};

      if(!validator.validate(this.state.email)){
        const newErrors = Object.assign({}, errors, {
          ...errors,
          email: 'Email no válido'
      });
      this.setState({ errorfields: newErrors });
      }
    }
    crearUsuario = () => {
      var validate = this.formValidation(false);
      if (!validate) return;

      let usuario = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        role: this.state.role        
      };
      this.props.createUsuario(usuario);
      
    }

    editarUsuario = () => {
      var validate = this.formValidation(true);
      if (!validate) return;

      let usuario = {
        id: this.state.id,
        name: this.state.name,
        email: this.state.email,
        role: this.state.role        
      };
      this.props.updateUsuario(usuario);      
    }


    render() {
      if(!this.props.shouldOpenCreateUserModal) {
        return null;
      }

        return (
              <Dialog
                fullScreen={false}
                open={this.props.shouldOpenCreateUserModal}
                scroll="body"
                maxWidth="xs"
                onClose={this.handleClose}
                aria-labelledby="responsive-dialog-title"
                disableBackdropClick={true}
                onEnter={this.handleLoad}
              >
                <DialogTitle className="titulo-dialog" id="responsive-dialog-title">
                  { this.props.isEditMode? "Editar Usuario": "Crear Usuario" }
                </DialogTitle>
                <DialogContent>
                <form>
                  <div className="row">
                    <div className="col-xs-12 col-md-12">
                      <div className="row" id="txtName" style={{ marginTop: '10px'}}>
                        <TextField name="name" 
                            placeholder="Nombre Usuario"  
                            label="Nombre de Usuario"
                            error={!!this.state.errorfields.name}
                            helperText={(!!this.state.errorfields.name)?this.state.errorfields.name:''}
                            fullWidth
                            onChange={this.handleNameChange}
                            value={this.state.name}
                            />
                      </div>
                      {!this.props.isEditMode ?
                      <div className="row" id="txtEmail" style={{ marginTop: '10px'}}>
                        <TextField
                            label="Email"
                            placeholder="Email"
                            name="email"
                            type="email"
                            error={!!this.state.errorfields.email}
                            helperText={(!!this.state.errorfields.email)?this.state.errorfields.email:''}
                            fullWidth
                            onChange={this.handleEmailChange}
                            value={this.state.email}
                            onBlur={this.onBlurEmail}
                        />
                      </div>:null}
                      {!this.props.isEditMode ?
                      <div className="row" id="txtPass" style={{ marginTop: '10px'}}>
                        <TextField
                            label="Password"
                            placeholder="Password"
                            name="password"
                            type="password"
                            error={!!this.state.errorfields.password}
                            helperText={(!!this.state.errorfields.password)?this.state.errorfields.password:''}
                            fullWidth
                            onChange={this.handlePasswordChange}
                            value={this.state.password}
                            inputProps={{maxLength: 6}}
                        />
                      </div> : null }                                  
                      <div className="row" id="selectRole" style={{ marginTop: '20px'}}>
                          <FormControl style={{ width:'100%'}} error={!!this.state.errorfields.role}>
                              <InputLabel shrink htmlFor="age-label-placeholder">
                                  Rol
                              </InputLabel>
                              <Select
                                value={this.state.role}
                                onChange={this.handleRolChange}
                                input={<Input name="age" id="age-label-placeholder" />}      
                                error={this.state.errorfields.role==='sel'}
                                >
                                <MenuItem value='sel'>
                                  <em>Seleccione Rol</em>
                                </MenuItem>
                                <MenuItem value={'ADMIN_ROLE'}>Administrador</MenuItem>
                                <MenuItem value={'USER_ROLE'}>Usuario</MenuItem>
                              </Select>
                              <FormHelperText>{this.state.errorfields.role}</FormHelperText>
                          </FormControl>
                      </div>                                                         
                    </div>
                  </div>

                </form>
                </DialogContent>
                <DialogActions>
                  <div className="row pad-20">
                    <div className="col-md-12 col-xs-12 text-right">
                        <Button className="m-r" color="default" variant="contained" style={{ margin: '10px 10px' }} onClick={this.handleClose}>
                            Cancelar
                        </Button>
                        <Button color="primary" variant="contained" style={{ margin: '10px 10px' }} onClick={this.handleSubmit}>
                            Guardar
                        </Button>
                    </div>
                  </div>
                </DialogActions>
              </Dialog>            
          );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shouldOpenCreateUserModal: state.modals.crearEditarUsuarioModal.shouldOpenCrearEditarUsuarioModal,
    usuarioData: state.modals.crearEditarUsuarioModal.usuarioData,
    isEditMode: state.modals.crearEditarUsuarioModal.isEditMode    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeModal: () => {
      dispatch(actionCloseCrearUsuarioModal())
    },
    createUsuario: (usuario) => {
      dispatch(actionCrearUsuario(usuario))
    },
    updateUsuario: (usuario) => {
      dispatch(actionEditarUsuario(usuario))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CrearEditarUsuario);
