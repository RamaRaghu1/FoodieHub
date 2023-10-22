import { CDN_URL } from "../../utils/constants";
// import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla: { deliveryTime },
  } = resData?.info;

  const isRatingGreater = avgRating > 4 ? true : false;

  return (
    <div
      // to={`/restaurants/${id}`}
      className="max-w-xs border-box inline-flex flex-col space-y-2 p-4 border border-transparent  hover:border-gray-300 hover:shadow-md rounded-lg  transform hover:scale-95"
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          className="rounded-2xl object-cover w-80 h-56"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

      <div className="w-full overflow-clip">
        <h1 className="font-bold text-base">{name}</h1>

        <p className="line-clamp-2 text-slate-500 break-words text-sm">
          {cuisines.join(", ")}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-500 font-normal">
          ⭐ {avgRating}
        </span>
        <span className="text-lg text-slate-500">&middot;</span>
        <span className="text-sm text-slate-500 font-normal">
          {deliveryTime} MINS
        </span>
        <span className="text-lg text-slate-500">&middot;</span>
        <span className="text-sm text-slate-500 font-normal">{costForTwo}</span>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-1 rounded-lg z-50">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
