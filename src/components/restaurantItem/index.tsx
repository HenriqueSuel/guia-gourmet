import { memo } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  image: string;
  description: string;
  price: string;
  id: string;
}

const RestaurantItemMemo = ({ description, image, name, price, id }: Props) => {
  const navigate = useNavigate();


  return (
    <div
      className="border p-4 rounded-lg shadow-lg mb-4 bg-white"
      onClick={() => navigate(`/restaurant/${id}`)}
    >
      {id !== "1" ? (
        <img
          className="w-full h-40 object-cover rounded-t-lg"
          src={image}
          alt={name}
        />
      ) : (
        <h1>{image}</h1>
      )}

      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-800 font-semibold">{price}</p>
    </div>
  );
};

const RestaurantItem = memo(RestaurantItemMemo);

export { RestaurantItem };
