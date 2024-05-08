import React from 'react'
import '../App.css';
function Header(props) {
    console.log("header",props.cardData)
    
    return (
        <div>
            <div className="add-to-cart">
              <span className="cart-count">{props.cardData.length}</span>
                <img alt="cart" src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
        </div>
    );
}


export default Header