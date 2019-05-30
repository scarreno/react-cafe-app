import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class ListadoUsuarios extends React.Component {




    render() {
        return (
            <div>
                <label className="title">Listado de Usuarios</label>
                <Paper className="root">                
                <Table className="table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell align="center">Nombre</TableCell>
                        <TableCell align="center">Rol</TableCell>
                        <TableCell align="center">Estado</TableCell>
                        <TableCell ></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.props.rows.map(row => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.email}
                        </TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">{row.role}</TableCell>
                        <TableCell align="center">{row.status?'Activo':'Inactivo'}</TableCell>
                        <TableCell align="center">
                            <Button variant="contained" user={row}>Editar</Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </Paper>
            </div>
          );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}


export default connect(mapStateToProps)(ListadoUsuarios);
