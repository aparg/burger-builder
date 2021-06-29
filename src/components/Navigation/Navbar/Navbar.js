import React from 'react'
// import Auxillary from '../../hoc/Auxillary'
import NavbarStyle from './NavbarStyle.module.css'
import Logo from '../../Logo/Logo'
import NavEl from '../NavEl'
import Toggle from '../Toggle/Toggle'


const Navbar = (props) => {
    return(
        <div className={NavbarStyle.nav}>
            <Toggle onClick={props.switched}/>
            <Logo/>
            {props.elements.map(el=>{
                return <NavEl element={el} key={el} type="Navbar"/>
            })}
            {console.log(window.innerWidth)}
        </div>
    )
}

export default Navbar