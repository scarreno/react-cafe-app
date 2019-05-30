import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function CrearUsuario() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

    function handleChange(event){
        console.log(event.target.value);
    }
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Crear Usuario</DialogTitle>
        <DialogContent >
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"   
            fullWidth     
            required    
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            type="text"
            fullWidth
            required
          />
            <Select
            value={'ADMIN_ROLE'}
            onChange={handleChange}
            inputProps={{
                name: 'age',
                id: 'age-simple',
            }}
            fullWidth
            required
            >
            <MenuItem value={'ADMIN_ROLE'}>Admin</MenuItem>
            <MenuItem value={'USER_ROLE'}>Usuario</MenuItem>
            </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CrearUsuario;