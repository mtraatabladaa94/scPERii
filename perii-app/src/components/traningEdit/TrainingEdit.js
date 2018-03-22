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
import setPropsAsInitial from './../../helpers/setPropsAsInitial';

const styles = {
    root: {
        marginLeft:-15,
        padding:0,
    },
};

export let TrainingContent = ({ classes }) => (
    
    <Grid container className={ classes.root }>
        <Grid item xs={12}>
            <Field
                id='userInput'
                name='userInput'
                label={'Solicitante de la Capacitación'}
                component={ BasicTextInput }
                shrink={ true }
            />
        </Grid>
        
        <Grid item xs={12} sm={6}>
            <Field
                id='groupInput'
                name='groupInput'
                label='Grupo de clases'
                component={BasicTextInput}
                shrink={ true }
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Field
                id='labInput'
                name='labInput'
                label='Laboratorio'
                component={BasicTextInput}
                shrink={ true }
            />
        </Grid>
        
        <Grid item xs={12} sm={4}>
            <Field
                id='dateInput'
                name='dateInput'
                label='Fecha'
                type='date'
                component={BasicTextInput}
                shrink={ true }
            />
        </Grid>

        <Grid item xs={12} sm={4}>
            <Field
                id='startHourInput'
                name='startHourInput'
                label='Hora inicial'
                type='time'
                component={BasicTextInput}
                shrink={ true }
            />
        </Grid>

        <Grid item xs={12} sm={4}>
            <Field
                id='endHourInput'
                name='endHourInput'
                label='Hora final'
                type='time'
                component={BasicTextInput}
                shrink={ true }
            />
        </Grid>
    </Grid>
);

TrainingContent.propTypes = {
    classes: PropTypes.object.isRequired,
    userInput: PropTypes.string,
    groupInput: PropTypes.string,
    labInput: PropTypes.string,
    dateInput: PropTypes.string,
    startHourInput: PropTypes.string,
    endHourInput: PropTypes.string,
};

TrainingContent = setPropsAsInitial(reduxForm({ form: 'trainingEdit' })(TrainingContent));

TrainingContent = withStyles(styles)(TrainingContent);

export let TrainingActions = ({ onClick }) => (
    <Button color='primary'>
        Guardar
    </Button>
);

TrainingActions.propTypes = {
    onClick: PropTypes.func.isRequired,
};

const handleSubmit = (values) => {
    console.log('MICHEL PRUEBA:');
    console.log(values);
};

export const TrainingEdit = ({open, onClose, onSave, training}) => (
    <form onSubmit={this.handleSubmit}>
        <BasicModal
            title={'Añadir capacitación'}
            open={open}
            text={'Este es un proceso fácil. Es necesario que ingrese todos los campos que son requeridos.'}
            dialogActions={<TrainingActions {...training} onClick={onClose} />}
            dialogContent={<TrainingContent />}
            onClose={onClose}
        />
    </form>
);

TrainingEdit.propTypes = {
    open: PropTypes.bool.isRequired,
    training: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default TrainingEdit;