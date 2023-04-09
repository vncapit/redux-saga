import { addToCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  const product = {
    name: "iPhone",
    category: "Mobile",
    price: 1000,
    color: "red",
  };
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
      <button onClick={() => dispatch(removeFromCart(product))}>
        Remove from cart
      </button>
    </div>
  );
}

export default Main;
