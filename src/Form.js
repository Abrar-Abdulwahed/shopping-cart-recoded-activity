import { useState } from "react";
import "./styles.css";

export default function Form(props) {
  const { cart, setCart } = props;
  const [item, setItem] = useState("");

  const addToCart = (e) => {
    e.preventDefault();
    setCart([...cart, item]);
    setItem("");
  };
  const handleChange = (e) => {
    setItem(e.target.value);
  };
  return (
    <form onSubmit={addToCart}>
      <h3>Shopping cart</h3>
      <div className="mb-3">
        <label>Item</label>
        <input
          type="text"
          className="form-control"
          placeholder="item"
          value={item}
          onChange={handleChange}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
}
