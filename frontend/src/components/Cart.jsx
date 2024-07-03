import React, { useEffect,useContext } from "react";
import "../Css/cart.css";
import cartcontext from '../Context/cart/cartcontext';
import Navbar from "./Navbar";

const Cart = () => {
  const { getitems,items,deleteitem,updateitem } = useContext(cartcontext);

  useEffect(() => {
    getitems();
  });
  let totalPrice = 0;
  return (
    <>
    <Navbar/>
    <article style={{marginTop:"100px"}}>
      {items.map((item,id) => {
        totalPrice += item.quantity * item.price;
        return <div className="cart_box" key={id}>
          <div className="cart_img">
            <img src={item.Image} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={()=>updateitem(item._id,item.quantity+1)}>+</button>
            <button>{item.quantity}</button>
            <button onClick={() => {
              if (item.quantity > 1) {
                updateitem(item._id, item.quantity - 1);
              }
            }}>-</button>

          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={()=>deleteitem(item._id)}>Remove</button>
          </div>
        </div>
})}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>$ - {Math.round(totalPrice)}</span>
      </div>
    </article>
    
</>
  );
};

export default Cart;