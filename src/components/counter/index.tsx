import { useState } from "react";
import { useRestaurant } from "../../context/restaurant.context";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";

const Counter = () => {
  /*   const [count, setCount] = useState(0); */

  const { rating, setRating } = useRestaurant();

  const { id } = useParams();

  const handleIncrement = () => {
    setRating((previous) => previous + 1);
  };

  const handleDecrement = () => {
    setRating((previous) => previous - 1);
  };

  const reservar = () => {
    const db = getFirestore();

    const collectionCart = collection(db, "cart");

    // Pegar o carrinho com base no usuário query
    const q = query(
      collectionCart,
      where("user.email", "==", "h.suel16@hotmail.com")
    );

    getDocs(q).then((data) => {
      // Se o usuário nào tem carrinho, entra no if e cria o carrinho
      if (data.docs.length === 0) {
        addDoc(collectionCart, {
          reservas: [
            {
              id,
              tables: rating,
            },
          ],
          user: {
            email: "h.suel16@hotmail.com",
          },
        });
      }

      // SE eu já tenho o item no meu carrinho
      const itemEncontrado = data.docs[0]
        .data()
        .reservas.some((item: any) => item.id === id);

      // Se o index for maior que zero eu tenho o item no carrinho
      // Se for -1 eu não tenho o item no carrinho
      if (itemEncontrado) {
        const array = data.docs[0]
          .data()
          .reservas.filter((item: any) => item.id !== id);

        const restaurantUpdate = doc(db, "cart", data.docs[0].id);

        updateDoc(restaurantUpdate, {
          reservas: [
            ...array,
            {
              id,
              tables: rating,
            },
          ],
        });
      } else {
        const restaurantUpdate = doc(db, "cart", data.docs[0].id);

        updateDoc(restaurantUpdate, {
          reservas: [
            ...data.docs[0].data().reservas,
            {
              id,
              tables: rating,
            },
          ],
        });
      }
    });
  };

  return (
    <div className="flex items-center space-x-4 border border-gray-300 rounded-lg">
      <button
        disabled={rating === 0}
        className="px-4 py-2 bg-gray-200 text-gray-700 font-bold rounded disabled:cursor-not-allowed hover:bg-gray-300"
        onClick={() => handleDecrement()}
      >
        -
      </button>
      <span className="text-2xl font-semibold">{rating}</span>
      <button
        disabled={rating === 5}
        className="px-4 py-2 bg-gray-200 text-gray-700 font-bold rounded disabled:cursor-not-allowed hover:bg-gray-300"
        onClick={() => handleIncrement()}
      >
        +
      </button>

      <button onClick={() => reservar()}>Reservar</button>
    </div>
  );
};

export { Counter };
