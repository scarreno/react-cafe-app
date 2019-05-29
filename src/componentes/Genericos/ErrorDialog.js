import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

class AlertDialog  extends React.Component {

    render(){

        if(!this.props.shouldOpenDialog) {
            return null;
          }

    return (
      <div>
        <Dialog
          open={this.props.shouldOpenDialog}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.props.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
};

AlertDialog.propTypes = {
    handleClose: PropTypes.func.isRequired,
    shouldOpenDialog: PropTypes.bool,
    title: PropTypes.string,
    message: PropTypes.string
  };
  export default AlertDialog;
  