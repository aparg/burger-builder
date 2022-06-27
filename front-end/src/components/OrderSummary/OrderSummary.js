import React from 'react'
import OrderSummaryStyle from './OrderSummary.module.css'
import Aux from '../../hoc/Auxillary'
import Spinner from '../Spinner/Spinner'
import { Link } from 'react-router-dom'

const OrderSummary = (props) => {
    let queryArr = []
    let data=Object.keys(props.ingredients).map(ing => {
        // return <li key={ing}><span style={{'textTransform':'capitalize','text-align':'left','padding':'0'}}>{ing} : {props.ingredients[ing]}</span></li>
        queryArr.push(ing+'='+props.ingredients[ing])
        return(
            <div className={OrderSummaryStyle.data} key={ing}>
                <div className={OrderSummaryStyle.item}>{ing}</div>
                <div className={OrderSummaryStyle.quantity}>{props.ingredients[ing]}</div>
            </div>
        )
    })

    let query = queryArr.join("&")
    console.log(query)

    data.splice(0,0,
        <div className={OrderSummaryStyle.data} key={'titles'}>
        <div className={OrderSummaryStyle.titleItem}><strong>Ingredients</strong></div>
        <div className={OrderSummaryStyle.titleQuantity}><strong>Quantity</strong></div>
    </div>)

    return(
        props.loading?<Spinner/>:
        <Aux cl={OrderSummaryStyle.main}>
          
            <strong className={OrderSummaryStyle.title}>Order Summary</strong>
            <ul className={OrderSummaryStyle.listStyle}>
                {data}
            </ul>
            <Link to={{pathname:"/checkout",search:query}}><button className={OrderSummaryStyle.order}>Purchase</button></Link>
        </Aux>    
    )
}

export default OrderSummary

