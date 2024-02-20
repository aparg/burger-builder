import React from "react";
import OrderSummaryStyle from "./OrderSummary.module.css";
import Aux from "../../hoc/Auxillary";
import Spinner from "../Spinner/Spinner";
// import { Link } from 'react-router-dom'

const OrderSummary = (props) => {
  let queryArr = [];
  let data = Object.keys(props.ingredients).map((ing) => {
    queryArr.push(ing + "=" + props.ingredients[ing]);
    return (
      <div className={OrderSummaryStyle.data} key={ing}>
        <div className={OrderSummaryStyle.item}>{ing}</div>
        <div className={OrderSummaryStyle.quantity}>
          {props.ingredients[ing]}
        </div>
      </div>
    );
  });

  // let query = queryArr.join("&")

  data.splice(
    0,
    0,
    <div className={OrderSummaryStyle.data} key={"titles"}>
      <div className={OrderSummaryStyle.titleItem}>
        <strong>Contents</strong>
      </div>
      <div className={OrderSummaryStyle.titleQuantity}>
        <strong>Quantity</strong>
      </div>
    </div>
  );

  return props.loading ? (
    <Spinner />
  ) : (
    <div className={OrderSummaryStyle.wrapper}>
      <div className={OrderSummaryStyle.title}>
        <strong className={OrderSummaryStyle.titleTxt}>Order Summary</strong>
      </div>
      <div className={OrderSummaryStyle.main}>
        <div className={OrderSummaryStyle.orderDetails}>
          <ul className={OrderSummaryStyle.listStyle}>{data}</ul>
        </div>
        <div className={OrderSummaryStyle.priceDetails}>
          <span style={{ fontSize: 1.5 + "rem" }}>Your total:</span>
          <div className={OrderSummaryStyle.totalPrice}>Rs.{props.total}</div>
          <button
            className={OrderSummaryStyle.purchaseBtn}
            onClick={props.purchase}
          >
            <strong>Purchase</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
