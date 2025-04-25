import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import CartDetails from './CartDetails'
import { FiTrash2 } from 'react-icons/fi'
import './Cart.css'

const Cart = () => {
  const {cart,clearCart, total, itemAmount} = useContext(ShopContext)
  return (
    <div>
      <div className="cart_container">
        <div className="cart_left">
          <div className="cart_header">
            <h1>Shopping Cart</h1>
            <h1>{itemAmount} Items</h1>
            <FiTrash2 onClick={clearCart} className="delete_cart"/>
          </div>
          <div className="cart_details">
            {cart.length > 0 ? (
                cart.map((item)=>(
                  <CartDetails item={item} key={item.id}/>
                ))
              ):(
                <p>Your Cart Is Empty</p>
              )
            }
          </div>
        </div>
        <div className="cart_right">
            <h2>cart Summary</h2>
            <div className="summary_item">
              <span>Items :</span>
              <span>{itemAmount}</span>
            </div>
            <div className="cart_summary">
              <div className="summary_item">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary_item total_cost">
                <span>Total Cost</span>
                <span>${isNaN(total) ? 0 : total}</span>
              </div>
              <button className="checkout_btn">CHECKOUT</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
