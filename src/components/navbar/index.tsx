import { Link } from "react-router-dom";
import data from "../../@mock/db.json";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container m-auto flex items-center justify-between">
        <Link className="text-2xl font-bold" to="/">
          {" "}
          Gui Gourmet
        </Link>

        <div className="flex items-center space-x-4">
          {data.categories.map((category) => (
            <Link key={category.id} to={`/category/${category.id}`}>
              {category.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
