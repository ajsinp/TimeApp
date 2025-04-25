import Hero from "../../Component/Hero/Hero.jsx"
import ProductList from "../../Component/ProductList/ProductList.jsx"
import React, { useContext } from "react"
import { ShopContext } from "../../Component/ShopContext/ShopContext.jsx"
const Homepage = () => {
  const {heroVisible} = useContext(ShopContext);

  return (
    <div>
      {heroVisible && <Hero /> }
    
      <ProductList/>
    </div>
  )
}

export default Homepage