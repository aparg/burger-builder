import React from 'react'
import OrderSummaryStyle from './OrderSummary.module.css'
import Aux from '../../hoc/Auxillary'

const OrderSummary = (props) => {
    let data=Object.keys(props.ingredients).map(ing => {
        // return <li key={ing}><span style={{'textTransform':'capitalize','text-align':'left','padding':'0'}}>{ing} : {props.ingredients[ing]}</span></li>
        return(
            <div className={OrderSummaryStyle.data} key={ing}>
                <div className={OrderSummaryStyle.item}>{ing}</div>
                <div className={OrderSummaryStyle.quantity}>{props.ingredients[ing]}</div>
            </div>
        )
    })

    data.splice(0,0,<div className={OrderSummaryStyle.data} key={'titles'}>
        <div className={OrderSummaryStyle.item}><strong>Ingredients</strong></div>
        <div className={OrderSummaryStyle.quantity}><strong>Quantity</strong></div>
    </div>)

    data.push("Total : "+props.total)
    return(
        <Aux cl={OrderSummaryStyle.main}>
            <strong className={OrderSummaryStyle.title}>Order Summary</strong>
            <ul className={OrderSummaryStyle.listStyle}>
                {data}
            </ul> 
        </Aux>    
    )
}

export default OrderSummary