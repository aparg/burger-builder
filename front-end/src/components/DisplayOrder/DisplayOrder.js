import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import axios from '../../axios_orders'
import DisplayOrderStyle from './DisplayOrder.module.css'

const DisplayOrder = (props) => {
    const [ordersObj, setOrders] = useState(null);
    let orderData = <Spinner/>

    useEffect(() => {
      axios.get('/display').then((res)=>
        setOrders({"ordersObj": res.data}
        )
      )
    })
    //check if order is loaded
    if(ordersObj){
        orderData =  <table className={DisplayOrderStyle.displayTable}>
            <tbody>
                <tr>
                    <th>Order Id</th>
                    <th>Cheese</th>
                    <th>Meat</th>
                    <th>Bacon</th>
                    <th>Salad</th>
                </tr>
                {ordersObj.ordersObj.map(element => {
                    return(
                        <tr key={element.order_id}>
                            <td>{element.order_id}</td>
                            <td>{element.cheese}</td>
                            <td>{element.meat}</td>
                            <td>{element.bacon}</td>
                            <td>{element.salad}</td>
                            <td><button onClick={props.deleteHandler}><img src="../../assets/images/Delete-icon/deleteicon.png" alt="delete"/></button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    }

    return (
       orderData
    )
}

export default DisplayOrder