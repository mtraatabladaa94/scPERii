/* Imports Node & ReactJS Elements */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { Field, reduxForm } from 'redux-form';

/* Imports Custom Elements */
import BasicModal from './../../components/modal/BasicModal';
import BasicTextInput from './../formControls/BasicTextInput';

let TrainingActions = ({ onClick }) => (
    <Button onClick={onClick} color="primary">
        Guardar
    </Button>
);

TrainingActions.propTypes = {
    onClick: PropTypes.func.isRequired,
};

const styles = {
    root: {
        marginLeft:-15,
        padding:0,
    },
};

let TrainingContent = ({ classes }) => (
    <form>
        <Grid container className={ classes.root }>
            <Grid item xs={12}>
                <Field
                    id='userInput'
                    name='userInput'
                    label='Solicitante'
                    component={BasicTextInput}
                />
            </Grid>
            
            <Grid item xs={12} sm={6}>
                <Field
                    id='groupInput'
                    name='groupInput'
                    label='Grupo de clases'
                    component={BasicTextInput}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Field
                    id='labInput'
                    name='labInput'
                    label='Laboratorio'
                    component={BasicTextInput}
                />
            </Grid>
            
            <Grid item xs={12} sm={4}>
                <Field
                    id='dateInput'
                    name='dateInput'
                    label='Fecha'
                    type='date'
                    component={BasicTextInput}
                />
            </Grid>

            <Grid item xs={12} sm={4}>
                <Field
                    id='startHourInput'
                    name='startHourInput'
                    label='Hora inicial'
                    type='time'
                    component={BasicTextInput}
                />
            </Grid>

            <Grid item xs={12} sm={4}>
                <Field
                    id='endHourInput'
                    name='endHourInput'
                    label='Hora final'
                    type='time'
                    component={BasicTextInput}
                />
            </Grid>

        </Grid>
    </form>
);

TrainingContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

TrainingContent = withStyles(styles)(TrainingContent);

TrainingContent = reduxForm({ form: 'trainingEdit'})(TrainingContent);

export const TrainingEdit = ({open, onClose}) => (
    <BasicModal
        title={'Añadir capacitación'}
        open={open}
        text={'Este es un proceso fácil. Es necesario que ingrese todos los campos que son requeridos.'}
        dialogActions={<TrainingActions onClick={onClose} />}
        dialogContent={<TrainingContent />}
        onClose={onClose}
    />
);

TrainingEdit.propTypes = {
    open: PropTypes.bool.isRequired,
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default TrainingEdit;