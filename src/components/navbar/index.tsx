import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { useRestaurant } from "../../context/restaurant.context";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  DocumentData,
  query,
  where,
  limit,
} from "firebase/firestore";
import { useEffect, useState } from "react";

const Navbar = () => {
  // pode deixar o db de forma global
  // const db = getFirestore();

  const [data, setData] = useState<DocumentData[]>([]);
  /* Buscar um item apenas */
  useEffect(() => {
    const db = getFirestore();
    const categoriesRef = doc(db, "categories", "dXzYJe35yqalysb15YxR");

    getDoc(categoriesRef).then((item) => {
      console.log(item.data());
    });
  }, []);

  // Buscar todos os itens da collection
  useEffect(() => {
    const db = getFirestore();
    const categoriesRef = collection(db, "categories");

    getDocs(categoriesRef).then((categories) => {
      const menu = categories.docs.map((category) => {
        console.log("category", category.id);
        return {
          ...category.data(),

          //Pegar o id do documento
          id: category.id,
        };
      });

      console.log("menu", menu);
      // Setando no meu estado
      setData(menu);
    });
  }, []);

  // Fazer um filtro
  useEffect(() => {
    const db = getFirestore();

    const queryRef = query(
      collection(db, "categories"),
      where("id", ">=", 3),
      where("title", "==", "Italiano"),
      limit(1)
    );

    getDocs(queryRef).then((categories) => {
      const menu = categories.docs.map((category) => category.data());

      console.log("menu Filtrado", menu);
    });
  }, []);

  const { rating } = useRestaurant();

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container m-auto flex items-center justify-between">
        <Link className="text-2xl font-bold" to="/">
          Gui Gourmet
        </Link>

        <div className="flex items-center space-x-4">
          {data.map((category) => (
            <Link key={category.id} to={`/category/${category.id}`}>
              {category.title}
            </Link>
          ))}
          <div className="relative">
            <FaBell className="text-xl cursor-pointer" />

            <span className="absolute -top-4 left-2 bg-red-500 rounded-full px-2 py-1 text-xs">
              {rating}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
