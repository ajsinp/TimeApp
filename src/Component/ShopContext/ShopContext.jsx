import React, {createContext, useEffect, useState} from 'react'

// create Context
export const ShopContext = createContext();

// import productdata

import { productsData } from '../../data';

const ShopContextProvider = ({children}) =>{
    const [products, setProducts] = useState(productsData);
    const [filteredProducts, setFilteredProducts]= useState(productsData);

    // Function to serach product

    const searchProducts = (query)=>{
        if(query === ''){
            setFilteredProducts(products);
        }else{
            const filtered = products.filter((product)=>
                product.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(filtered)
        }
    }

    // hero visibility
    const [heroVisible, setHeroVisible] = useState(true)

    //cart State
    const [cart, setCart] = useState([]);

    const [itemAmount, setItemAmount] = useState(0)

    const [total, setTotal] = useState(0);

    //a function that handle adding product to cart
    const addToCart = (product, id) =>{
        const newItem = {...product, amount: 1}

        const cartItem = cart.find((item) => {
            return item.id === id;
        });

        //if the item exist lets update the qunatity
        if(cartItem){
            const newCart = [...cart].map((item)=>{
                if(item.id === id){
                    return {...item, amont : cartItem.amont + 1}
                } else {
                    return item;
                }
            });
            setCart(newCart)
        } else {
            setCart([...cart, newItem])
        }
    }
            
    // function to remove item from cart
    const removeFromCart = (id) =>{
        const newCart = cart.filter((item) =>{
            return item.id !== id;
        });
        setCart(newCart)
    }

    //function to clear cart

    const clearCart = ()=>{
        setCart([]);
    }

    //get the total price 
    useEffect(()=>{
        const total = cart.reduce((accumulator,currentItem)=>{
            const priceAsNumber = parseFloat(currentItem.price)
            if(isNaN(priceAsNumber)){
                return accumulator;
            }
            return accumulator + priceAsNumber * currentItem.amount;
        },0)
        setTotal(total);
    },[cart])
    // update item quantity in cart
    useEffect(()=>{
        if(cart){
            const amount = cart.reduce((accumulator, currentItem)=>{
                return accumulator+ currentItem.amount;
            },0)
            setItemAmount(amount);
        }
    },[cart]);

    // function is responsible for increase the 
    // quantity of a specific item
    const increaseAmount = (id) => {
        setCart(prevCart =>
          prevCart.map(item =>
            item.id === id ? { ...item, amount: item.amount + 1 } : item
          )
        );
      };
      

    // functio to reduce the quantity of specific item
    const decreaseAmount = (id) => {
        const cartItem = cart.find(item => item.id === id);
      
        if (cartItem) {
          if (cartItem.amount <= 1) {
            // Remove the item if its amount is 1 or less
            removeFromCart(id);
          } else {
            // Otherwise, decrease the amount
            const newCart = cart.map(item =>
              item.id === id ? { ...item, amount: item.amount - 1 } : item
            );
            setCart(newCart);
          }
        }
      };
      


    return <ShopContext.Provider value={{cart, addToCart,
   removeFromCart,clearCart,increaseAmount, 
   itemAmount,total, decreaseAmount, heroVisible, setHeroVisible,filteredProducts,searchProducts}} >
        {children}
    </ShopContext.Provider>
} 
export default ShopContextProvider