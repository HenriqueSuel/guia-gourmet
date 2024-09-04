import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IRestaurant } from "../../interfaces/restaurant.interface";
import data from "../../@mock/db.json";

const Details = () => {
  const [loading, setLoading] = useState(true);
  const [restaurant, setRestaurant] = useState<IRestaurant>();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const info = new Promise<IRestaurant | undefined>((resolve) => {
      setTimeout(() => {
        resolve(data.restaurants.find((item) => item.id === id));
      }, 500);
    });

    info.then((resp) => {
      setLoading(false);
      setRestaurant(resp);
    });
  }, [id]);

  if (loading) return <p>...Carregando</p>;

  if (!restaurant) return <p>Restaurante não encontrado</p>;

  return (
    <div className="p-4">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{restaurant.name}</h1>
      <p className="text-gray-700 mt-2">{restaurant.description}</p>
      <p className="text-gray-700 mt-2">Price Range: {restaurant.price}</p>
      <p className="text-gray-700 mt-2">Category: {restaurant.category}</p>
    </div>
  );
};

export default Details;
