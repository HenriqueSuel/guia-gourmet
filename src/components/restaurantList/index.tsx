import { RestaurantItem } from "../restaurantItem";
import { useRestaurant } from "../../context/restaurant.context";
import { useEffect, useState } from "react";
import { IRestaurant } from "../../interfaces/restaurant.interface";

const RestaurantList = () => {
  const [text, setText] = useState("");
  const { restaurants } = useRestaurant();

  const [hex, setHex] = useState("#fff");
  const [filterList, setFilterList] = useState<IRestaurant[]>([]);

  useEffect(() => {
    setFilterList(restaurants);
  }, [restaurants]);

  const handleFilter = () => {
    const list = restaurants.filter((item) =>
      item.name.toUpperCase().includes(text.toUpperCase())
    );

    setFilterList(list);
  };

  function randomColor() {
    const hex = ((Math.random() * 0xffffff) << 0).toString(16);
    setHex(`#${hex}`);
  }

  return (
    <div className="container m-auto">
      <h1 className="text-2xl font-bold text-center mb-4">
        Bem-vindo ao GuiaGourmet!
      </h1>

      <div className="mb-4">
        <input
          type="text"
          className="border-blue-800 border-2 p-2"
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <button
          onClick={() => handleFilter()}
          className="bg-blue-600 p-2 border-2 border-blue-600 text-white"
        >
          Filtar
        </button>
        <button
          onClick={() => setFilterList(restaurants)}
          className="bg-blue-600 p-2 border-2 border-blue-600 text-white"
        >
          resetar
        </button>
        <button
          onClick={randomColor}
          className="bg-blue-600 p-2 border-2 border-blue-600 text-white"
        >
          Mudar a cor do fundo
        </button>
      </div>

      <div style={{ background: hex }}>
        {filterList.map((item) => (
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
    </div>
  );
};

export { RestaurantList };
