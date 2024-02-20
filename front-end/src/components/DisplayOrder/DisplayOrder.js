import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import axios from "../../axios_orders";
import DisplayOrderStyle from "./DisplayOrder.module.css";
import DeleteIcon from "../../assets/images/icons/deleteicon.png";

const DisplayOrder = (props) => {
  const [ordersObj, setOrders] = useState(null);

  const getData = () => {
    console.log("called");
    axios.post("/display").then((res) => setOrders({ ordersObj: res.data }));
  };

  useEffect(() => {
    getData();
  }, []);
  //check if order is loaded
  if (ordersObj) {
    return (
      <table className={DisplayOrderStyle.displayTable}>
        <tbody>
          <tr>
            <th>Order Id</th>
            <th>Cheese</th>
            <th>Meat</th>
            <th>Bacon</th>
            <th>Salad</th>
            <th>Delete</th>
          </tr>
          {ordersObj.ordersObj.map((element) => {
            return (
              <tr key={element.order_id}>
                <td>{element.order_id}</td>
                <td>{element.cheese}</td>
                <td>{element.meat}</td>
                <td>{element.bacon}</td>
                <td>{element.salad}</td>
                <td
                  onClick={() => {
                    props.deleteOrder(element.order_id);
                    getData();
                  }}
                  className={DisplayOrderStyle.delete}
                >
                  <img src={DeleteIcon} alt="delete" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  return <Spinner />;
};

export default DisplayOrder;
