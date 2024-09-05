import { Link } from "react-router-dom";
import data from "../../@mock/db.json";
import { FaBell } from "react-icons/fa";
import { useRestaurant } from "../../context/restaurant.context";

const Navbar = () => {


  const { rating } = useRestaurant();

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container m-auto flex items-center justify-between">
        <Link className="text-2xl font-bold" to="/">
          Gui Gourmet
        </Link>

        <div className="flex items-center space-x-4">
          {data.categories.map((category) => (
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
