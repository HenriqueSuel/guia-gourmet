import React, { createContext, useContext, useState } from "react";

// Criar a interface que vai conter os valores das variaveis/estados/funções globais
interface RestaurantProps {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}

// Criar o contexto passando os valores default que tem na minha interface
const RestaurantContext = createContext<RestaurantProps>({
  rating: 0,
  setRating: () => null,
});

interface RestaurantProviderProps {
  children: React.ReactNode;
}

// Criar o meu provider, ele que vai conter os variaveis/estados/funções globais.
const RestaurantProvider = ({ children }: RestaurantProviderProps) => {
  const [rating, setRating] = useState(0);

  return (
    <RestaurantContext.Provider
      value={{
        rating, // isso é igual a isso -> rating: rating,
        setRating,
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
