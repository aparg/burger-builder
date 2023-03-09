import React from 'react'
// import Auxillary from '../../hoc/Auxillary'
import NavbarStyle from './NavbarStyle.module.css'
import Logo from '../../Logo/Logo'
import NavigationElement from '../NavigationElements/NavigationElement'
import Toggle from '../Toggle/Toggle'


const Navbar = (props) => {
    return(
        <div className={NavbarStyle.nav}>
            <Toggle onClick={props.switched}/>
            <Logo/>
            {Object.keys(props.elements).map(el=>{
                    return <NavigationElement label={el} route={props.elements[el]} key={el} type="Navbar"/>
            })}
            {console.log(window.innerWidth)}
        </div>
    )
}

export default Navbar