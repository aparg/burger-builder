import React,{ useEffect } from 'react'
import NavEl from '../NavEl'
import SideDrawerStyle from './SideDrawerStyle.module.css'
import Logo from '../../Logo/Logo'
import Toggle from '../Toggle/Toggle'

const SideDrawer = (props) => {

    return(
        <div className={SideDrawerStyle.main}>
            <Toggle onClick={props.switched}/>
            <Logo size={{height:'5%',width:'90%'}}/>
            {props.elements.map(el=>{
                return <NavEl element={el} key={el} type="SideDrawer"/>
            })}
        </div>
    )
}

export default SideDrawer