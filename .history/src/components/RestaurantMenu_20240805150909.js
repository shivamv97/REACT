import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  [id] = useParams();
  return (
    <div>
      <h1>Restaurant id : {id}</h1>
      <h2>Burger King</h2>
    </div>
  );
};

export default RestaurantMenu;