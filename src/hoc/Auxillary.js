import React from 'react'

const Auxillary = (props) => {
    return(
        <div className={props.cl}>
            {props.children}
        </div>
    )
}

export default Auxillary