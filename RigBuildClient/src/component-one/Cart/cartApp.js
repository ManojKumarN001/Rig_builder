import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import cart from './Cart';
import { CartProvider } from 'react-use-cart'

function Cart() {
    return(
        <div>
            <CartProvider>
              <Home/>
              <Cart/>
            </CartProvider>
        </div>

    )
}
export default Cart


