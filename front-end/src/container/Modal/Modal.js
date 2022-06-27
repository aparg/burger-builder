import React from 'react'
import ModalStyle from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../hoc/Auxillary'

const Modal = (props) => {
    let classes=[ModalStyle.disappear]
    if(props.show){
        classes.splice(0,1)
        classes.push(ModalStyle.appear)}
    return(
        <Aux>
            <Backdrop show={props.show} back={props.back}/>
            <div className={classes.join(' ')}>
                {props.children}
            </div>
        </Aux>   
    )
}

export default Modal
