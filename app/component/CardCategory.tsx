'use client'

import { FunctionComponent } from "react";
import Category from "../Type/category";

type props = {
    category: Category
}

const CardCategory: FunctionComponent<props> = ({category}) => {

    return (
        <div>
            <p>{category.name}</p>
        </div>
    );

}

export default CardCategory;