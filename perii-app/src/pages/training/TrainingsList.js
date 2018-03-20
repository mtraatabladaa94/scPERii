/* Imports Node & ReactJS Elements */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

/* Imports Custom Elements */
import Theme from './../../components/theme/Theme';
import BasicDataTable from "./../../components/dataTable/SimpleDataTable";
import BasicModal from './../../components/modal/BasicModal';

const columnData = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
    { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
    { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
    { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
    { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];
let counter = 0;
function createData(name, calories, fat, carbs, protein) {
    counter += 1;
    return { id: counter, name, calories, fat, carbs, protein };
}
const data = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
];

export class TrainingList extends Component {

    static propTypes = {
        
    }

    state = {
        addFormOpen: false,
    };
  
    handleAddFormOpen = () => {
        this.setState({ addFormOpen: true });
        console.log('MICHEL ERROR');
    };
  
    handleAddFormClose = () => {
        this.setState({ addFormOpen: false });
    };

    handleTableDelete = () => {
    }

    render() {

        const dialogActions = (
            <Button onClick={this.handleAddFormClose} color="primary">
                Subscribe
            </Button>
        );
        const dialogContent = (
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
            />
        );

        return (

            <Theme title={'Capacitaciones'}>
                <BasicDataTable
                    title={'Capacitaciones'}
                    data={data}
                    orderByDefault={'calories'}
                    columns={columnData}
                    onDelete={this.handleTableDelete}
                    onFilter={this.handleAddFormOpen}
                />
                <BasicModal
                    title={'Suscribirse'}
                    open={this.state.addFormOpen}
                    text={'To subscribe to this website, please enter your email address here. We will send updates occationally.'}
                    dialogActions={dialogActions}
                    dialogContent={dialogContent}
                    onClose={this.handleAddFormClose}
                />
            </Theme>
            
        )

    }

}

export default TrainingList;