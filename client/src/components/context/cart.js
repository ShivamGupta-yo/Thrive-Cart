import { useState, useContext, createContext, useEffect } from "react";
import { useAuth } from "./auth";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart,setCart] = useState([]);
  const {auth,setAuth} = useAuth();


  useEffect(()=>{
    // console.log(auth.user=== null)
    // if(auth.user=== null){
    //   localStorage.removeItem("cart");
    // }
    let existingCartItem = localStorage.getItem('cart');
    if(existingCartItem){
      setCart(JSON.parse(existingCartItem));
    }
  },[])
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
