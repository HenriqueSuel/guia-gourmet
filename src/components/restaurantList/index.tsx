import { RestaurantItem } from "../restaurantItem";
import data from "../../@mock/db.json";
import { useEffect, useState } from "react";
import { IRestaurant } from "../../interfaces/restaurant.interface";
import { useParams } from "react-router-dom";

const RestaurantList = () => {
  const { id } = useParams();

  const [ count, setCount] = useState();
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const info = new Promise<IRestaurant[]>((resolve) => {
      setTimeout(() => {
        resolve(
          data.restaurants.filter((item) => (id ? item.category === id : true))
        );
      }, 500);
    });

    info.then((resp) => {
      setRestaurants(resp);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p>...Carregando</p>;

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
