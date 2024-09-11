import { RestaurantItem } from "../restaurantItem";
import { useRestaurant } from "../../context/restaurant.context";


const RestaurantList = () => {
  const { restaurants } = useRestaurant();

  return (
    <div className="container m-auto">
      <h1 className="text-2xl font-bold text-center mb-4">
        Bem-vindo ao GuiaGourmet!
      </h1>

      {restaurants.map((item) => (
        <RestaurantItem
          key={item.id}
          id={item.id}
          description={item.description}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};

export { RestaurantList };
