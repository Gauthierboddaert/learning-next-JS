import Ingredients from "./Ingredients";
import RecipeStep from "./RecipeStep";
import User from "./User";
import Category from "./category";


type Recipe = {
    id:number;
    name:string;
    Lipide:number;
    glucide:number;
    proteine:number;
    recipeStep:Array<RecipeStep>;
    ingredients:Array<Ingredients>;
    category:Array<Category>;
    descriptions:string;
    users:User;
    createdAt: Date,
    updatedAt: Date
}

export default Recipe;