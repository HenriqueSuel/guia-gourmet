import React, { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoading } from "./loading.context";
import { IRestaurant } from "../interfaces/restaurant.interface";
import data from "../@mock/db.json";

// Criar a interface que vai conter os valores das variaveis/estados/funções globais
interface RestaurantProps {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  restaurants: IRestaurant[];
}

// Criar o contexto passando os valores default que tem na minha interface
const RestaurantContext = createContext<RestaurantProps>({
  rating: 0,
  setRating: () => null,
  restaurants: [],
});

interface RestaurantProviderProps {
  children: React.ReactNode;
}

interface ProductProps {
  name: string;
  price: number;
  quantity: number;
}
// Criar o meu provider, ele que vai conter os variaveis/estados/funções globais.
const RestaurantProvider = ({ children }: RestaurantProviderProps) => {
  const [rating, setRating] = useState<number>(0);
  const { id } = useParams();
  const { handleLoading } = useLoading();
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  useEffect(() => {
    handleLoading(true);
    const info = new Promise<IRestaurant[]>((resolve) => {
      setTimeout(() => {
        resolve(
          data.restaurants.filter((item) => (id ? item.category === id : true))
        );
      }, 2000);
    });

    info.then((resp) => {
      setRestaurants(resp);
      handleLoading(false);
    });
  }, [id]);

  return (
    <RestaurantContext.Provider
      value={{
        rating, // isso é igual a isso -> rating: rating,
        setRating,
        restaurants,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

// Criar o nosso hook
const useRestaurant = () => useContext(RestaurantContext);

// Exportar o nosso Hook e o provider
// Lembrando que o RestaurantProvider a gente precisa colocar no index.tsx global (Aonde está nossas rotas)
export { useRestaurant, RestaurantProvider };
