import React, { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoading } from "./loading.context";
import { IRestaurant } from "../interfaces/restaurant.interface";
import data from "../@mock/db.json";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

// Criar a interface que vai conter os valores das variaveis/estados/funções globais
interface RestaurantProps {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  restaurants: IRestaurant[];
  filterRestarurants: (id: string) => void;
}

// Criar o contexto passando os valores default que tem na minha interface
const RestaurantContext = createContext<RestaurantProps>({
  rating: 0,
  setRating: () => null,
  restaurants: [],
  filterRestarurants: () => null,
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
    console.log("id", id);
    handleLoading(true);

    const db = getFirestore();

    const restaurantsRef = collection(db, "restaurants");

    if (!id) {
      getDocs(restaurantsRef).then((restaurants) => {
        const restaurantsData = restaurants.docs.map((restaurant) => {
          return {
            ...restaurant.data(),
            id: restaurant.id,
          };
        });
        setRestaurants(restaurantsData as IRestaurant[]);
        handleLoading(false);
      });
    } else {
    }
  }, [id]);

  const filterRestarurants = (id: string) => {
    const db = getFirestore();

    const queryRef = query(
      collection(db, "restaurants"),
      where("category", "==", id)
    );

    getDocs(queryRef).then((restaurants) => {
      const restaurantsData = restaurants.docs.map((restaurant) => {
        return {
          ...restaurant.data(),
          id: restaurant.id,
        };
      });

      setRestaurants(restaurantsData as IRestaurant[]);
    });
  };

  return (
    <RestaurantContext.Provider
      value={{
        rating, // isso é igual a isso -> rating: rating,
        setRating,
        restaurants,
        filterRestarurants,
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
