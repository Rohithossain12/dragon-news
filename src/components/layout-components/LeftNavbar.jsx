import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="font-bold">All Category ({categories.length}) </h2>
      <div className="space-y-2 pt-5">
        {/* {categories.map((category) => (
          <button className="btn w-full">
            <NavLink to={`/category/${category.category_id}`}>
              {category.category_name}
            </NavLink>
          </button>
        ))} */}
        {categories.map((category) => (
          <NavLink
            className="btn w-full "
            to={`/category/${category.category_id}`}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
