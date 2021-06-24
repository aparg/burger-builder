import React from 'react'
import NavElStyle from './NavEl.module.css'
const NavEl = (props) => {
    return(<span className={NavElStyle.main}>
            {props.element}
        </span>)
}

export default NavEl