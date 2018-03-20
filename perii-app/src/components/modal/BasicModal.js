/* Imports Node & ReactJS Elements */
import React, { Component } from "react";
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';

export const BasicModal = ({ title, text, dialogActions, dialogContent, open, onClose }) => (
    <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
    >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
            
            {
                text ? <DialogContentText>{text}</DialogContentText> : null
            }
            
            {
                dialogContent ? dialogContent : null
            }

        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} color="primary">
                Cancelar
            </Button>
            {
                dialogActions
            }
        </DialogActions>
    </Dialog>
);

BasicModal.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    dialogContent: PropTypes.element.isRequired,
    dialogActions: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
}

export default BasicModal;