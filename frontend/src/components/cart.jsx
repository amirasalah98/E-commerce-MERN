import { BsCartCheck   } from "react-icons/bs";
import { useContext  } from "react";
import { useNavigate  } from "react-router-dom";
import { CartContext } from '../cartContext';
import { DarkModeContext } from "../DarkModeContext";
import style from './shop.module.css'

function Cart(){
 const {darkMode}=useContext(DarkModeContext)
 const navigate = useNavigate();
      const { cartItems, removeFromCart, clearCart,increaseQuantity,decreaseQuantity } = useContext(CartContext);
       const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
    return(
            <div className={` py-5 container ${darkMode? style.containerDark:style.containerLight}`}>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        < div className=" d-flex flex-column flex-md-row justify-content-between  align-items-start">
          <div className={`w-75 ${style.cartsBox}`}>
          {cartItems.map(item => (
            <div className={` p-3 d-flex justify-content-between my-4 ${style.cartBox}`} key={item._id}>
              {/* <div>
                <img src={item.image} alt="" />
              </div> */}
              <div>
              <h4>{item.title}</h4>
              
              <div className={`d-flex ${style.quantityBox}`}>
  <button onClick={() => increaseQuantity(item._id)}>+</button>
  <input type="number" value={item.quantity} readOnly style={{ margin: "0 10px" }} />
  <button onClick={() => decreaseQuantity(item._id)}>-</button>
</div>
</div>
<div className="d-flex flex-column align-items-end">
  <button className={`${style.btnX}`} onClick={() => removeFromCart(item._id)}>
                X
              </button>
  <p>Price: ${item.price}</p>
  </div>
              
            </div>
          
          ))}
          </div>
          <div className={` p-4 my-4 ${style.totalBox}`}>
          <h3>Total: ${totalPrice}</h3>
          <div className="d-flex justify-content-between">
            <button onClick={() => navigate("/checkout")}>Checkout</button>
          <button className={`${style.gradientBtn}`} onClick={clearCart}>Clear Cart</button>
          </div>
          </div>
        </div>
        
      )}
    </div>
    )
}
export default Cart;