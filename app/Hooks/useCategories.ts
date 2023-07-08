import { useEffect, useState } from "react";
import Category from "../Type/category";
import getCategories from "../categories/api/getCategories";


const useCategories = (): Category[]|null => {
    const [categories, setCategories] = useState<Category[]|null>(null);

    useEffect(()=> {
        getCategories().then((Category: Category[]) => {
            setCategories(Category);
        })
    });

    return categories;
}

export default useCategories;