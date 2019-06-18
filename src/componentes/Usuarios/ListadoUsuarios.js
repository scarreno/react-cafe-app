import React from 'react';
import { connect } from 'react-redux';
import MUIDataTable from "mui-datatables";
import Button from '@material-ui/core/Button';
import { actionOpenEditarUsuarioModal } from './../../actions/modalActions';
import { actionEliminarUsuario } from './../../actions/usuariosActions';

class ListadoUsuarios extends React.Component {

    handleEditar =(data)=>{
        const usuarioData = {
                        id: data[0],
                        email: data[1],
                        name: data[2],
                        role:  data[3],
                        activo: data[4],                        
                    };
        this.props.openEditModal(usuarioData);
    }

    handleEliminar =(data)=>{
        const id =  data[0];
        this.props.deleteUsuario(id);
    }

    render() {
        // eslint-disable-next-line array-callback-return
        this.props.rows.map(field => {
            field.statusDesc =field.status ? 'Activo':'Inactivo'
        });
    
        const columns = [
            {
                name: "_id",
                label: "Id",
                options: {
                 filter: false,
                 sort: false,
                 display: 'false'
                }
               },            
            {
             name: "email",
             label: "Email",
             options: {
              filter: true,
              sort: true,
             }
            },
            {
             name: "name",
             label: "Nombre",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "role",
             label: "Rol",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "statusDesc",
             label: "Estado",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "Editar",
             options: {
                filter: true,
                sort: false,
                empty: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    
                                return (
                                    <Button variant="contained" onClick={()=>{this.handleEditar(tableMeta.rowData);}}>
                                        Editar
                                    </Button>
                                );
                            }
                        }
            },
            {
                name: "Eliminar",
                options: {
                   filter: true,
                   sort: false,
                   empty: true,
                   customBodyRender: (value, tableMeta, updateValue) => {
                       
                                   return (
                                       <Button variant="contained" color="secondary" onClick={()=>{this.handleEliminar(tableMeta.rowData);}}>
                                           Eliminar
                                       </Button>
                                   );
                               }
                           }
               }
           ];
           
           const options = {
             filterType: 'textField',
             print: false,
             download: false,
             viewColumns: false,
             filter: false,
             selectableRows: false,
             responsive: 'stacked',
             rowsPerPageOptions: [5,10,20],
             textLabels: {
                body: {
                  noMatch: "No se encontró información",
                  toolTip: "Sort",
                }
            },
            pagination: {
                next: "Siguiente",
                previous: "Anterior",
                rowsPerPage: "Filas por página:",
                displayRows: "of",
              },
           };
        return (
            <div style={{marginTop: 20, marginLeft: 50, marginRight: 50, marginBottom: 10}}>
                <MUIDataTable
                title={"Listado de Usuarios"}
                data={this.props.rows}
                columns={columns}
                options={options}
                search={false}            
                />
            </div>
        );

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        openEditModal: (userData) => {
            dispatch(actionOpenEditarUsuarioModal(userData));
        },
        deleteUsuario: (usuarioId) =>{
            dispatch(actionEliminarUsuario(usuarioId));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ListadoUsuarios);
