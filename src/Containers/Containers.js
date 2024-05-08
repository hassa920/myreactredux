import React from 'react'
import {connect} from 'react-redux'
import Home from '../Components/Home'
import  { addToCart } from '../Services/Actions/Actions'
import { removeToCart } from '../Services/Actions/Actions'
 const y=state=>({
   cardData:state.cardItems
 })
const x=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})

export default connect(y,x)(Home)
