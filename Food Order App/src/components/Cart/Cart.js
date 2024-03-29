import React, { useContext, useState } from "react";

import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import CartContext from "../store/cart-context";
import CartItems from './CartItem'
import Checkout from "./Checkout";

const Cart = (props) => {
  
  const cartCtx = useContext(CartContext)
  const [isCheckout, setIsCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmitting] = useState(false)

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: +1})
  }

  const orderHandler = () =>{
    setIsCheckout(true)
  }

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true)
    await fetch("https://react-test-954d2-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      })
    })
    setIsSubmitting(false)
    setDidSubmitting(true)
    cartCtx.clearCart()
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItems 
          key= {item.id}
          name= {item.name}
          amount = {item.amount}
          price = {item.price}
          onRemove = {cartItemRemoveHandler.bind(null, item.id)}
          onAdd = {cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (<div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
    </div>)

    const cartModalContent = <React.Fragment>
          {cartItems}
          <div className={classes.total}>
              <span>Total Amount</span>
              <span>{totalAmount}</span>
          </div>
          {isCheckout && <Checkout onCancel= {props.onClose} onConfirm = {submitOrderHandler} />}
          {!isCheckout && modalActions}
    </React.Fragment>

    const isSubmittingModalContent = <p>Sending Order data...</p>
    const didSubmittingModalContent = <React.Fragment>
      <p>Sucessfully sent the order!</p>
      <div className={classes.actions}>
      <button className={classes.button} onClick={props.onClose}>
        Close
      </button>
    </div>
    </React.Fragment>

    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmittingModalContent}
        </Modal>
    )
}

export default Cart