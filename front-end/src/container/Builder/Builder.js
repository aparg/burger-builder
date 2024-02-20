import React, { Component } from "react";
import Poster from "../../components/Poster/Poster";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Auxillary";
import BuildControls from "../../components/BuildControls/BuildControls";
import OrderContext from "../../components/contexts/OrderContext";
import Footer from "../../components/Footer/Footer";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Modal from "../Modal/Modal";
import axios from "../../axios_orders";
import BuilderStyle from "./Builder.module.css";
import Spinner from "../../components/Spinner/Spinner";
import OkIcn from "../../assets/images/ok.png";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Builder extends Component {
  state = {
    ingredients: null,
    totalCost: 20,
    ordered: false,
    loading: false,
    purchased: false,
  };

  price = {
    cheese: 20,
    meat: 30,
    bacon: 25,
    salad: 15,
  };

  addIngredients = (ingredient) => {
    let copiedIngredients = { ...this.state.ingredients };
    copiedIngredients[ingredient] = this.state.ingredients[ingredient] + 1;
    console.log(this.state.ingredients);
    let totalCost = this.state.totalCost + this.price[ingredient];
    this.setState({ ingredients: copiedIngredients, totalCost: totalCost });
  };

  removeIngredients = (ingredient) => {
    if (this.state.ingredients[ingredient] > 0) {
      let copiedIngredients = { ...this.state.ingredients };
      copiedIngredients[ingredient] = this.state.ingredients[ingredient] - 1;
      this.setState({ ingredients: copiedIngredients });
      let totalCost = this.state.totalCost - this.price[ingredient];
      this.setState({ ingredients: copiedIngredients, totalCost: totalCost });
      this.costCalculator();
    }
  };

  costCalculator = () => {};

  orderHandler = () => {
    this.setState({ ordered: true });
  };

  backFromPurchasingState = () => {
    this.setState({ ordered: false });
  };

  purchaseHandler = () => {
    this.setState({ loading: true });
    console.log(this.state.ingredients);
    axios.post("/orders", this.state.ingredients).then(() => {
      this.setState({ loading: false, ordered: false, purchased: true });
      console.log("ORDER RECORDED");
    });
  };

  ingredientDependents = (<Spinner />);

  componentDidMount() {
    axios.get("/ingredients").then((res) => {
      console.log("Got ingredients");
      this.setState({ ingredients: res.data });
    });
  }

  render() {
    if (this.state.ingredients) {
      this.ingredientDependents = (
        <Aux>
          <Poster />
          <div className={BuilderStyle.flexContainer} id="BuildBurger">
            <Burger ingredients={this.state.ingredients} />
            <OrderContext.Provider value={{ orderHandler: this.orderHandler }}>
              <BuildControls
                ingredients={this.state.ingredients}
                addIng={this.addIngredients}
                removeIng={this.removeIngredients}
                totalCost={this.state.totalCost}
              />
            </OrderContext.Provider>
          </div>
          <Footer />
          <Modal show={this.state.ordered} back={this.backFromPurchasingState}>
            <OrderSummary
              ingredients={this.state.ingredients}
              total={this.state.totalCost}
              purchase={this.purchaseHandler}
              loading={this.state.loading}
            />
          </Modal>

          <Modal
            show={this.state.purchased}
            back={() => this.setState({ purchased: false })}
          >
            <div className={BuilderStyle.orderPlacedContainer}>
              <strong className={BuilderStyle.orderPlaced}>
                Order has been placed!
              </strong>
              <img src={OkIcn} className={BuilderStyle.okIcn}></img>
              Thank You for ordering from Dad's Burgers!
            </div>
          </Modal>
        </Aux>
      );
    }
    return <Aux>{this.ingredientDependents}</Aux>;
  }
}

export default withErrorHandler(Builder, axios);
