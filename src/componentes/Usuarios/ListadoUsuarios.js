
import React from 'react';
import { connect } from 'react-redux';
import MUIDataTable from "mui-datatables";
import Button from '@material-ui/core/Button';
import { actionOpenEditarUsuarioModal } from './../../actions/modalActions';

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

    handleEliminar =(event)=>{
        console.log(event);
    }

    render() {
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
           ];
           
           const options = {
             filterType: 'multiselect',
             print: false,
             download: false,
             viewColumns: false,
             filter: false,
             selectableRows: true,
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
            onRowsSelect: (currentRowsSelected, allRowsSelected)=>{
                console.log(allRowsSelected);

            }
           };
        return (
            <div>
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
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ListadoUsuarios);
