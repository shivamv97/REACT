import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Img_cdn_url } from "../config";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    GetRestaurantInfo();
  }, []);

  async function GetRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.960059122809971&lng=77.57337538383284&restaurantId=655"
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }
  return (
    <div>
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurant?.data?.cards[2]?.card.card?.info?.name}</h2>
        {/* <img
        src={
          Img_cdn_url +
          restaurant?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId
        }
      />
      <h3>{restaurant?.data?.cards[2]?.card.card?.info?.city}</h3>
      <h3>{restaurant?.data?.cards[2]?.card.card?.info?.areaName}</h3>
      <h3>{restaurant?.data?.cards[2]?.card.card?.info?.costForTwoMessage}</h3>
      <h3>{restaurant?.data?.cards[2]?.card.card?.info?.avgRating} stars</h3> */}
      </div>
      <div>
        <h1>MENU(RECOMMENDED)....</h1>
      </div>
    </div>
  );
};

export default RestaurantMenu;