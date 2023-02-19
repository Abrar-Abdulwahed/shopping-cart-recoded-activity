import "./styles.css";

export default function ShoppingItem({ item, handleItemDelete }) {
  return (
    <div className="item">
      <p>{item}</p>
      <button onClick={handleItemDelete}>x</button>
    </div>
  );
}
