import React from 'react'
// import Auxillary from '../../hoc/Auxillary'
import NavbarStyle from './NavbarStyle.module.css'
import Logo from '../../assets/images/burgerLogo.png'
import NavEl from './NavEl'


const Navbar = (props) => {
    return(
        <div className={NavbarStyle.nav}>
            <img src={Logo} className={NavbarStyle.Logo} alt="logo"/>
            {props.elements.map(el=>{
                return <NavEl element={el} key={el}/>
            })}
        </div>
    )
}

export default Navbar