import { RestaurantList } from "../../components/restaurantList";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useRestaurant } from "../../context/restaurant.context";

const Home = () => {
  const { restaurants } = useRestaurant();

  return (
    <>
      <Carousel>
        {restaurants.map((item) => (
          <div key={item.id}>
            <img src={item.image} />
          </div>
        ))}
      </Carousel>

      <RestaurantList />
    </>
  );
};

export default Home;
