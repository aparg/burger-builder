import React from 'react'
import NavigationElementsStyle from './NavigationElements.module.css'
const NavEl = (props) => {
    let classes=[NavigationElementsStyle.main]
    classes.push(NavigationElementsStyle[props.type])
    console.log(classes)
    return(<span className={classes.join(' ')}>
            {props.element}
        </span>)
}

export default NavEl