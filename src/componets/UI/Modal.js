import classes from "./Modal.module.css"

import React, { Fragment } from 'react'

        const Backdrop = props =>{
        return <div className={classes.backdrop} />
        };

        const ModalOverlay = props =>{
            return ( <div className={classes.modal}>
                <div className={classes.content}>{props.children}</div>
            </div>
            );
        }


    const Modal = (props) => {
        return <Fragment>


        </Fragment>
    }


export default Modal
