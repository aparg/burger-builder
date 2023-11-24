import React from "react";
import CartStyle from "../Cart/Cart.css";

function Cart() {
  let cart = [];
  let cartTotal = 0;
  function addToCart() {
    cart.push({
      name: "Burger",
      price: 3.14,
    });

    cartTotal += 3.14;
    updateCart();
  }

  function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    // Clear the current items in the cart
    cartItems.innerHTML = "";

    // Add the updated items to the cart
    cart.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItems.appendChild(listItem);
    });

    // Update the total price
    cartTotalElement.textContent = cartTotal.toFixed(2);
  }
  return (
    <>
      <h1>Welcome to Dad's Burgers</h1>

      <div className={CartStyle.burger}>
        <h2>Burger</h2>
        <p>Price: $3.14</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>

      <div className={CartStyle.cart}>
        <h2>Cart</h2>
        <ul className={CartStyle.cartItems}></ul>
        <p>
          Total: $<span id="cart-total">0.00</span>
        </p>
      </div>

      <div className={CartStyle.paymentOptions}>
        <h2>Payment Options</h2>
        <div class={Cart.paymentMethod}>
          <img
            src="paypal_logo.png"
            alt="PayPal Logo"
            width="100"
            height="40"
          />
          <a href="https://www.paypal.com/">Pay with PayPal</a>
        </div>
        <div class="payment-method">
          <img src="visa_logo.png" alt="Visa Logo" width="100" height="40" />
          <a href="https://www.visa.com/">Pay with Visa</a>
        </div>
      </div>
    </>
  );
}

export default Cart;
