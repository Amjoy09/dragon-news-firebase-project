import { use } from "react";
import { NavLink } from "react-router";

const AllCatPromise = fetch("/categories.json").then((res) => res.json());

const AllCategories = () => {
  const AllCategories = use(AllCatPromise);

  return (
    <div>
      <h2 className="font-semibold text-xl text-center">
        All Categories ({AllCategories.length})
      </h2>
      <div className="grid grid-cols-1 mt-5 text-center">
        {AllCategories.map((cat) => (
          <NavLink
            to={`/category/${cat.id}`}
            key={cat.id}
            className={
              "text-base-200 rounded-sm hover:bg-base-300 hover:text-base-content hover:font-medium py-3"
            }
          >
            {cat.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
