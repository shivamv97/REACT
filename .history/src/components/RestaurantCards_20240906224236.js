//(?)->optional chaining
import { Img_cdn_url } from "../config";
const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,
  sla,
}) => {
  //props or {restaurant} ->Object Destructuring
  return (
    <div className="w-52 m-2 p-2 shadow-lg bg-pink-50">
      <img src={Img_cdn_url + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3 className="break-words">{cuisines.join(",")}</h3>
      <h4 className="bg-green-500 text-white font-bold py-2 px-4 inline-block rounded">
        {avgRating}
        <span className="ml-2 text-yellow-400">
          {"★".repeat(Math.round(avgRating))}
          {"☆".repeat(5 - Math.round(avgRating))}
        </span>
      </h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes </h4>
    </div>
  );
};

export default RestrauntCard;