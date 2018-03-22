/* Imports Node & ReactJS Elements */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
    },
});

export const BasicTextInput = ({ classes, id, type, label, input, meta, shrink }) => {

    const shrinkProp = shrink ? ({ 'shrink' : shrink }) : null;

    return (
        <FormControl
            className={classes.formControl}
            fullWidth
            error={ meta.touched && meta.error ? true : false }
        >

            <InputLabel
                htmlFor={ id }
                { ...shrinkProp }
            >
                { label }
            </InputLabel>

            <Input
                id={ id }
                { ...input }
                type={ type ? type : 'text' }
            />

            { meta.touched && meta.error ? <FormHelperText>{meta.error}</FormHelperText> : null }

        </FormControl>
    );
}

BasicTextInput.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    input: PropTypes.object,
    meta: PropTypes.object,
    shrink: PropTypes.bool,
};

export default withStyles(styles, { withTheme: true })(BasicTextInput);