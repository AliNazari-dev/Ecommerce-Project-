import React from 'react'
import Discount from '../components/discount/Discount'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/MainPage/Home'
import NewArrivals from '../components/newarrivals/NewArrivals'
import TopCate from '../components/top/TopCate'
import Shop from '../components/shops/Shop'
import Wrapper from '../components/wrapper/Wrapper'
import Footer from '../common/footer/Footer'


const Pages = ({productItems , cartItem , addToCart , shopItems}) => {
  return (
    <>
    <Home cartItem={cartItem}/>
    <FlashDeals productItems={productItems} addToCart={addToCart}/>
    <TopCate/>
    <NewArrivals/>
    <Discount/>
    <Shop shopItems={shopItems} addToCart={addToCart} />
    <Wrapper/>
    <Footer/>
    
    </>
  )
}

export default Pages