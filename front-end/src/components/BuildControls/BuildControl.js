import React from 'react'
import BuildControlStyle from './BuildControl.module.css'


const BuildControl = (props) => {
    return(
        <div className={BuildControlStyle.main}>
            <p className={BuildControlStyle.val}>{props.type}</p>
            <button className={BuildControlStyle.btn} onClick={props.add}>+</button>
            <button className={BuildControlStyle.btn} onClick={props.remove} disabled={props.disabling}>-</button>
        </div>
    )
}

export default BuildControl
