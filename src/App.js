import { useState } from "react";
import Form from "./Form";
import ShoppingList from "./ShoppingList";
import "./styles.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const handleItemDelete = (index) => {
    cart.splice(index, 1);
    setCart([...cart]);
  };
  return (
    <div className="card">
      <Form cart={cart} setCart={setCart} />
      <ShoppingList items={cart} handleItemDelete={handleItemDelete} />
    </div>
  );
}
