import React from 'react'
import LogoImg from '../../assets/images/burgerLogo.png'
import LogoStyle from './Logo.module.css'

const Logo = (props) => {
    return <img src={LogoImg} className={LogoStyle.image} style={props.size}alt="Logo"/>
}

export default Logo