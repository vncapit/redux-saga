import { useSelector } from "react-redux";

const Header = () => {
  const cartData = useSelector((state) => state.cartData);
  console.log(cartData);
  return (
    <div className="header">
      <div className="cart-div">
        <span>{cartData.length}</span>
        <span> Items</span>
      </div>
    </div>
  );
};

export default Header;
