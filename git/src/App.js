import React, { useState } from "react";
import Products from "./product";
import Cart from "./cart";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My Online Shop</Typography>
      </Toolbar>
    </AppBar>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  return (
    <div>
      <Header/>
      <Products handleAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
}

export default App;