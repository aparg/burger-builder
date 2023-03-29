import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import axios from '../../axios_orders'


const DisplayOrder = () => {
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
        orderData =  <table>
            <tbody>
                <tr>
                    <th>Order Id</th>
                    <th>Cheese</th>
                    <th>Meat</th>
                    <th>Bacon</th>
                    <th>Salad</th>
                </tr>
                {console.log(ordersObj.ordersObj)}
                {ordersObj.ordersObj.map(element => {
                    return(
                        <tr>
                            <td>{element.order_id}</td>
                            <td>{element.cheese}</td>
                            <td>{element.meat}</td>
                            <td>{element.bacon}</td>
                            <td>{element.salad}</td>
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