
import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import { Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Button } from '@material-ui/core';

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
                        <TableRow key={row._id}>
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
