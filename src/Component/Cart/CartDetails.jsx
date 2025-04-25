import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext';
import { FiTrash2 } from 'react-icons/fi';
import { IoMdRemove } from 'react-icons/io';
import { IoMdAdd } from 'react-icons/io';
import './Cart.css'


const CartDetails = ({item}) => {

    //  Destracture item
    const {id, title, image, price,amount} = item;

    // Extarct necessary function from shop context
    const {removeFromCart, increaseAmount, decreaseAmount} = useContext(ShopContext);
  return (
    <div>
      <div className="cart_item">
        <div className="product_details">
            <img src={image} alt={title} />
            <div className="product_info">
                <h3>{title}</h3>
                <div onClick={()=>{removeFromCart(id)}} className="cart_item_remove">
                    <FiTrash2/> Remove
                </div>
            </div>
        </div>
        <div className="quantity">
            <button onClick={()=>decreaseAmount(id)}>
                <IoMdRemove/>
            </button>
            <span>{amount}</span>
            <button onClick={()=>increaseAmount(id)}>
                <IoMdAdd/>
            </button>
        </div>
        <div className="price">${price}</div>
        <div className="total">{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
      </div>
    </div>
  )
}

export default CartDetails
