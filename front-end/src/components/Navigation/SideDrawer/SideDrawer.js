import React from 'react'
import NavigationElement from '../NavigationElements/NavigationElement'
import SideDrawerStyle from './SideDrawerStyle.module.css'
import Logo from '../../Logo/Logo'
import Toggle from '../Toggle/Toggle'
import Backdrop from '../../../container/Backdrop/Backdrop'
import Aux from '../../../hoc/Auxillary'

const SideDrawer = (props) => {

    return(
        <Aux>
            <Backdrop show={true} back={props.switched}/>
            <div className={SideDrawerStyle.main}>
                
                <Toggle onClick={props.switched}/>
                <Logo size={{height:'5%',width:'90%'}}/>
                {props.elements.map(el=>{
                    return <NavigationElement element={el} key={el} type="SideDrawer"/>
                })}
            </div>
        </Aux>
    )
}

export default SideDrawer