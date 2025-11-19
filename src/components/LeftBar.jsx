import React, { Suspense } from "react";
import AllCategories from "./AllCategories";

const LeftBar = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-spinner loading-sm"></span>}
      >
        <AllCategories></AllCategories>
      </Suspense>
    </div>
  );
};

export default LeftBar;
