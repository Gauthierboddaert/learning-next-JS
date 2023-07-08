import { useEffect, useState } from "react";
import Category from "../Type/category";
import getCategories from "../categories/api/getCategories";


const useCategories = () => {
    const [categories, setCategories] = useState<Category[]|null>(null);

    useEffect(()=> {
        console.log(getCategories());
    });
}

export default useCategories;