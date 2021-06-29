import React from 'react'
import NavElStyle from './NavElStyle.module.css'
const NavEl = (props) => {
    let classes=[NavElStyle.main]
    classes.push(NavElStyle[props.type])
    console.log(classes)
    return(<span className={classes.join(' ')}>
            {props.element}
        </span>)
}

export default NavEl