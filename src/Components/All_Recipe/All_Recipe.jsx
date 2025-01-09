import { useEffect, useState } from "react";
import Recipe_Cart from "../Recipe_Cart/Recipe_Cart";


const All_Recipe = () => {
    const [recipes, set_recipes] = useState([]);

    useEffect(() => {
        fetch('../../../public/Recipe.json')
            .then(res => res.json())
            .then(data => {
                set_recipes(data);
            })
    }, [])
    return (
        <div className="col-span-2">
            <div className="grid grid-cols-2 gap-6">
                {recipes.map((recipe) => (
                    <Recipe_Cart key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default All_Recipe;