import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import axios from '../../axios_orders'


const DisplayOrder = () => {
    const [orders, setOrders] = useState(null);
    let orderData=<Spinner/>

    useEffect(() => {
      axios.get('/display').then((res)=>
        setOrders({"orders": res.data}
        )
      )
    })
    //check if order is loaded
    if(orders){
        orderData=orders
    }

    return (
        <table>
            <tr>
                <th>Order Id</th>
                <th>Cheese</th>
                <th>Meat</th>
                <th>Bacon</th>
                <th>Salad</th>
            </tr>

            {orderData.forEach(element => {
                return (
                    <tr>
                        <td>{element.order_id}</td>
                        <td>{element.cheese}</td>
                        <td>{element.meat}</td>
                        <td>{element.bacon}</td>
                        <td>{element.salad}</td>
                    </tr>
                )
            })}
        </table>
        
    )
}
export default DisplayOrder