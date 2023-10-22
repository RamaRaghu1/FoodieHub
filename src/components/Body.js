import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../../utils/useOnlineStatus";
import Footer from "./Footer";

const Body = () => {
  const RestaurantWithPromoted = withPromotedLabel(RestaurantCard);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.369726076519406&lng=85.33414583862306&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) {
    return <h1>Looks like you are offline!</h1>;
  }

  console.log("body render");

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="mx-auto my-6 lg:my-10 md:w-4/5 overflow-hidden">
        <div className="mx-auto w-full flex justify-between items-center py-2 px-2 border-b">
          <div className="flex bg-white rounded-3xl px-4 py-2 gap-2 border focus-within:border-[#E75E4C]">
            <input
              type="text"
              className="border border-black"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="px-4 py-2 bg-green-100 m-4"
              onClick={() => {
                console.log(searchText);

                const filteredRestaurant = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
              }}
            >
              Search
            </button>
          </div>

          <div className=" m-4 p-4">
            <button
              className="p-2 bg-green-100 m-4"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredRestaurant(filteredList);

                console.log(filteredList);
              }}
            >
              Top rated restaurant
            </button>
          </div>
        </div>
        <div className="basis-full">
          <div className="grid justify-items-center grid-cols-[repeat(auto-fill,minmax(280px,1fr))] lg:grid-cols-4  gap-y-12 lg:gap-x-8 md:gap-x-12 ">
            {filteredRestaurant.map((restaurant) => (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                {restaurant.info.veg ? (
                  <RestaurantWithPromoted resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Body;
