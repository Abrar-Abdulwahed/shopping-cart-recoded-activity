import ShoppingItem from "./ShoppingItem";
import "./styles.css";

export default function ShoppingList({ items, handleItemDelete }) {
  return (
    <div className="shopping-cart">
      <h3>Shopping cart</h3>
      {items.map((item, index) => (
        <ShoppingItem
          key={index}
          item={item}
          handleItemDelete={(e) => {
            handleItemDelete(index);
          }}
        />
      ))}
    </div>
  );
}
