import { RestaurantList } from "../../components/restaurantList";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import { useRestaurant } from "../../context/restaurant.context";
import { useEffect } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";

const Home = () => {
  const { id } = useParams();

  const { filterRestarurants } = useRestaurant();

  useEffect(() => {
    if (!id) return;

    filterRestarurants(id);
  }, [id]);

  useEffect(() => {
    //  const db = getFirestore();
    // const mock = [
    //   {
    //     name: "Si Señor",
    //     category: "EzlxHM4AGU7dAqxuddMZ",
    //     image: "/assets/mexicano-1.avif",
    //     description:
    //       "Restaurante de alto padrão trazendo pratos clássicos do México.",
    //     price: "$$",
    //     tables: 25,
    //     reservedTables: 10,
    //   },
    //   {
    //     name: "El Mariachi",
    //     category: "EzlxHM4AGU7dAqxuddMZ",
    //     image: "/assets/mexicano-2.avif",
    //     description: "Comida mexicana autêntica com uma atmosfera vibrante.",
    //     price: "$$",
    //     tables: 30,
    //     reservedTables: 15,
    //   },
    //   {
    //     name: "La Taqueria",
    //     category: "EzlxHM4AGU7dAqxuddMZ",
    //     image: "/assets/mexicano-3.avif",
    //     description: "Especializado em tacos e burritos deliciosos.",
    //     price: "$",
    //     tables: 15,
    //     reservedTables: 5,
    //   },
    //   {
    //     name: "Tacos & Tequila",
    //     category: "EzlxHM4AGU7dAqxuddMZ",
    //     image: "/assets/mexicano-4.jpg",
    //     description:
    //       "Um lugar para experimentar tacos com uma grande variedade de tequilas.",
    //     price: "$$$",
    //     tables: 20,
    //     reservedTables: 8,
    //   },
    //   {
    //     name: "La Vida Loca",
    //     category: "EzlxHM4AGU7dAqxuddMZ",
    //     image: "/assets/mexicano-5.jpg",
    //     description:
    //       "Pratos mexicanos tradicionais em um ambiente descontraído.",
    //     price: "$",
    //     tables: 10,
    //     reservedTables: 4,
    //   },
    //   {
    //     name: "Sushi House",
    //     category: "pzmUeyVo5j1zpcDr5Zvx",
    //     image: "/assets/japones-1.jpg",
    //     description:
    //       "Especialidades japonesas frescas, incluindo sushi e sashimi.",
    //     price: "$$$",
    //     tables: 35,
    //     reservedTables: 20,
    //   },
    //   {
    //     name: "Sakura Sushi",
    //     category: "pzmUeyVo5j1zpcDr5Zvx",
    //     image: "/assets/japones-2.jpg",
    //     description:
    //       "Um restaurante japonês com uma grande variedade de pratos e uma atmosfera acolhedora.",
    //     price: "$$$",
    //     tables: 28,
    //     reservedTables: 18,
    //   },
    //   {
    //     name: "Ramen Express",
    //     category: "pzmUeyVo5j1zpcDr5Zvx",
    //     image: "/assets/japones-3.jpeg",
    //     description:
    //       "Oferece ramen autêntico e outros pratos japoneses rápidos.",
    //     price: "$$",
    //     tables: 18,
    //     reservedTables: 10,
    //   },
    //   {
    //     name: "Tempura Delight",
    //     category: "pzmUeyVo5j1zpcDr5Zvx",
    //     image: "/assets/japones-4.jpeg",
    //     description:
    //       "Famoso por seu tempura crocante e pratos de peixe fresco.",
    //     price: "$$$",
    //     tables: 22,
    //     reservedTables: 14,
    //   },
    //   {
    //     name: "Tokyo Grill",
    //     category: "pzmUeyVo5j1zpcDr5Zvx",
    //     image: "/assets/japones-5.jpg",
    //     description:
    //       "Grill japonês com uma variedade de pratos grelhados e sushi.",
    //     price: "$$$",
    //     tables: 40,
    //     reservedTables: 25,
    //   },
    //   {
    //     name: "Bella Italia",
    //     category: "dXzYJe35yqalysb15YxR",
    //     image: "/assets/italiano-1.jpeg",
    //     description:
    //       "Autêntica comida italiana com pizzas e massas feitas na hora.",
    //     price: "$$",
    //     tables: 32,
    //     reservedTables: 16,
    //   },
    //   {
    //     name: "La Dolce Vita",
    //     category: "dXzYJe35yqalysb15YxR",
    //     image: "/assets/italiano-2.jpeg",
    //     description:
    //       "Delícias italianas, incluindo pratos clássicos e sobremesas.",
    //     price: "$$",
    //     tables: 27,
    //     reservedTables: 12,
    //   },
    //   {
    //     name: "Pasta Pronto",
    //     category: "dXzYJe35yqalysb15YxR",
    //     image: "/assets/italiano-3.jpeg",
    //     description: "Especializado em massas frescas e molhos autênticos.",
    //     price: "$",
    //     tables: 15,
    //     reservedTables: 5,
    //   },
    //   {
    //     name: "Pizza Paradiso",
    //     category: "dXzYJe35yqalysb15YxR",
    //     image: "/assets/italiano-4.webp",
    //     description:
    //       "Uma grande seleção de pizzas artesanais e ingredientes frescos.",
    //     price: "$$",
    //     tables: 20,
    //     reservedTables: 9,
    //   },
    //   {
    //     name: "Trattoria da Marco",
    //     category: "dXzYJe35yqalysb15YxR",
    //     image: "/assets/italiano-5.jpg",
    //     description:
    //       "Restaurante italiano com pratos tradicionais e ambiente acolhedor.",
    //     price: "$$",
    //     tables: 25,
    //     reservedTables: 10,
    //   },
    //   {
    //     name: "Sabor do Brasil",
    //     category: "tNhP8xTaMaCbOulKtnkU",
    //     image: "/assets/brasileiro-1.webp",
    //     description:
    //       "Oferece uma variedade de pratos típicos brasileiros em um ambiente alegre.",
    //     price: "$$",
    //     tables: 30,
    //     reservedTables: 15,
    //   },
    //   {
    //     name: "Churrascaria Rio",
    //     category: "tNhP8xTaMaCbOulKtnkU",
    //     image: "/assets/brasileiro-2.jpg",
    //     description: "Famosa por seu churrasco e pratos típicos do Brasil.",
    //     price: "$$$",
    //     tables: 45,
    //     reservedTables: 30,
    //   },
    //   {
    //     name: "Boteco do João",
    //     category: "tNhP8xTaMaCbOulKtnkU",
    //     image: "/assets/brasileiro-3.jpeg",
    //     description:
    //       "Comida de boteco com uma variedade de petiscos e pratos tradicionais.",
    //     price: "$",
    //     tables: 20,
    //     reservedTables: 10,
    //   },
    //   {
    //     name: "Feijoada & Cia",
    //     category: "tNhP8xTaMaCbOulKtnkU",
    //     image: "/assets/brasileiro-4.jpg",
    //     description:
    //       "Especializado em feijoada e outros pratos brasileiros tradicionais.",
    //     price: "$$",
    //     tables: 25,
    //     reservedTables: 12,
    //   },
    //   {
    //     name: "Café da Manhã Brasileiro",
    //     category: "tNhP8xTaMaCbOulKtnkU",
    //     image: "/assets/brasileiro-5.webp",
    //     description:
    //       "Oferece uma variedade de opções para um café da manhã brasileiro autêntico.",
    //     price: "$",
    //     tables: 15,
    //     reservedTables: 5,
    //   },
    // ];
    // mock.forEach((item) => {
    //   console.log(item);
    //   addDoc(collectionRestaurants, item);
    // });
  }, []);

  return (
    <>
      {/*   <Carousel>
        {restaurants.map((item) => (
          <div key={item.id}>
            <img src={item.image} />
          </div>
        ))}
      </Carousel> */}

      <RestaurantList />
    </>
  );
};

export default Home;
