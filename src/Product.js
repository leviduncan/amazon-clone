import "./Product.css"

import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';

function Product() {
    return (
      <div className="product">
        <div className="product__info">
          <p>The lean Startup</p>
          <p className="product__price"><small>$</small><strong>19.69</strong></p>
          <div className="product__rating">
            <StarRateIcon />
          </div>
        </div>
        <img src="https://m.media-amazon.com/images/I/51T-sMqSMiL._AC_SL260_.jpg" alt="The Lean Startup" />
       <button>Add to cart button</button> 
      </div>
    );
}

export default Product
