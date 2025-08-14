import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return(
        <div className="p-4 m-4 text-center">
            <h1 className="my-4  font-bold text-2xl">Cart</h1> 
            <div>
                <button className="p-2 m-2 bg-black text-white rounded" onClick={handleClearCart}>clear cart</button>
            </div>
            {cartItems.length === 0 && (
                <h1>cart is empty</h1>
            )}
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}/>
            </div>   
        </div> 
    )
}

export default Cart;