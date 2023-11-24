import React from 'react'
import { Link } from 'react-router-dom'
import NavigationElementsStyle from './NavigationElements.module.css'
const NavigationElement = (props) => {
    let classes=[NavigationElementsStyle.main]
    classes.push(NavigationElementsStyle[props.type])
    console.log(classes)
    return(<Link className={classes.join(' ')} to={props.route}>
            {props.label}
        </Link>)
}

export default NavigationElement
