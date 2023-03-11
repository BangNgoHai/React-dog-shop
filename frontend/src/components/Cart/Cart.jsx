import { fontWeight } from '@mui/system';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Contexts/CartContext';
import './cart.css'

const Cart = () => {
  const {myCart,total,addToCart,setTotal} = useContext(CartContext);
  const navigate = useNavigate();
  const handleCheckout = () => {
      setTotal(0);
      addToCart([]);
  };

  const handleHome = () => {
    navigate("/");
  };
  return (
    <div>
      <section className="cart-container">
        <div className="cart-header">CHECKOUT: </div>
        <div className="cart-items">
            {myCart.slice(1).map((item)=>{
              return(
                <div className="card-items">
                    <img src={item.imageUrl} />
                    {item.name} : {item.price}$
                </div>
              )
            })}
            <div className="cart-total"> TOTAL : {total}$</div>
        </div>
        <button className="cart-checkout" onClick={handleCheckout} >DONE</button>
        <button className="cart-gohome" onClick={handleHome}>RETURN HOME</button>
      </section>
    </div>
  )
}

export default Cart
