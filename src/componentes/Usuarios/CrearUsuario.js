import React from 'react';
import Select from '@material-ui/core/Select';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    FormControl,
    TextField,
    MenuItem,
    InputLabel,
    Input
  } from '@material-ui/core';
import { connect } from 'react-redux';

class CrearUsuario extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            open: false,
            email: '',
            name: '',
            role:''
        }
    }

    handleClickOpen =()=> {
        this.setState({open: true});
    }
    
     handleClose = () => {
        this.setState({open: false});
    }
    
    handleChange = (event) => {
        console.log(event.target.value);
    }

    render() {
        return (
            <div>
              <Dialog
                fullScreen={false}
                open={this.props.shouldOpenCreateUserModal}
                scroll="body"
                maxWidth="md"
                onClose={this.handleClose}
                aria-labelledby="responsive-dialog-title"
                disableBackdropClick={true}
              >
                <DialogTitle className="titulo-dialog" id="responsive-dialog-title">
                  Crear Usuario
                </DialogTitle>
                <DialogContent>
                    <div className="row">
                      <div className="col-xs-12 col-md-12">
                        <div className="row" id="txtName" style={{ marginTop: '10px'}}>
                          <TextField name="name" placeholder="Nombre Usuario" label="Nombre de Usuario" type="text" fullWidth/>
                        </div>
                        <div className="row" id="txtEmail" style={{ marginTop: '10px'}}>
                          <TextField name="email" placeholder="Email" label="Email" type="email" fullWidth/>
                        </div>                
                        <div className="row" id="selectRole" style={{ marginTop: '10px'}}>
                            <FormControl style={{ width:'100%'}}>
                                <InputLabel shrink htmlFor="age-label-placeholder">
                                    Age
                                </InputLabel>
                                <Select
                                value={'ADMIN_ROLE'}
                                onChange={this.handleChange}
                                input={<Input name="age" id="age-label-placeholder" />}                         
                                >
                                <MenuItem value={'ADMIN_ROLE'}>Administrador</MenuItem>
                                <MenuItem value={'USER_ROLE'}>Usuario</MenuItem>
                                </Select>
                            </FormControl>
                        </div>                                                         
                      </div>
                    </div>
                </DialogContent>
                <DialogActions>
                  <div className="row pad-20">
                    <div className="col-md-12 col-xs-12 text-right">
                        <Button className="m-r" color="default" variant="outlined" style={{ margin: '10px 10px' }} onClick={this.handleClose}>
                            Cancelar
                        </Button>
                        <Button color="primary" variant="outlined" style={{ margin: '10px 10px' }}>
                            Guardar
                        </Button>
                    </div>
                  </div>
                </DialogActions>
              </Dialog>
            </div>
          );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        
    };
}

export default connect(mapStateToProps)(CrearUsuario);
