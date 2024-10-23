import { useSelector } from "react-redux";
import FoodItems from "./FoodItems";

const Cart = () => {
  const CartItems = useSelector((store) => store.cart.items);

  //   const store = useSelector((store) => store);  Wrong X X X
  return (
    <div className="flex">
      <h1 className="font-bold text-lg">Cart Items-{CartItems.length}</h1>
      {CartItems.map((item, index) => (
        <FoodItems key={index} {...item.card.info} />
      ))}
    </div>
  );
};

export default Cart;