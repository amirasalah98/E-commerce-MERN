import React, {createContext,useState,useEffect} from 'react'

const CartContext= createContext()
function CartProvider({children}){
  const [cartItems, setCartItems] = useState(()=> {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}, [cartItems]);
  const addToCart=(product)=>{
    const existingItem= cartItems.find(item=>item.id===product._d)
    if (existingItem){
        setCartItems(cartItems.map(item=>
            item.id===product.id? 
            { ...item, quantity: item.quantity + 1 }:item
        ))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
}
const increaseQuantity=(id)=>{
    setCartItems(cartItems.map(item=>
        item.id===id
        ? { ...item, quantity: item.quantity + 1 }
      : item
    ))
}
const decreaseQuantity=(id)=>{

    setCartItems(cartItems.map(item=>
        item.id===id && item.quantity>0
        ? { ...item, quantity: item.quantity - 1 }
      : item
    ))
}
const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
     const clearCart = () => {
    setCartItems([]);
  };
  
  return(
    <CartContext.Provider
     value={{ cartItems, addToCart,increaseQuantity,decreaseQuantity, removeFromCart, clearCart }}>
        {children}
    </CartContext.Provider>
  )
}
export {CartContext,CartProvider}