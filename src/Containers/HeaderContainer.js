import React from 'react'
import Header from '../Components/Header'

import {connect} from 'react-redux'


 const x=state=>({
   cardData:state.cardItems
 })
const y=dispatch=>({
    
})

export default connect(x,y)(Header)

