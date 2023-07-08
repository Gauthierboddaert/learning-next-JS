"use client";

import { FunctionComponent, useState } from "react";
import useCategories from "../Hooks/useCategories";
import Category from "../Type/category";
import CardCategory from "../component/CardCategory";

const Admin = () => {
  const [count, setCount] = useState<number>(0);
  const [display, setDisplay] = useState<string>("flex");
  const categories = useCategories();

  const changeDisplayValue = () => {
    "hidden" === display ? setDisplay("flex") : setDisplay("hidden");
  };

  return (
    <div>
      <h1 className={`${display}`}>count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click here</button>
      <button onClick={changeDisplayValue}>display count</button>

      {categories?.map((category: Category) => (
        <CardCategory key={category.id} category={category}/>
      ))}
    </div>
  );
};

export default Admin;
