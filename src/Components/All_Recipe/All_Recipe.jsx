import { useEffect, useState } from "react";
import Recipe_Cart from "../Recipe_Cart/Recipe_Cart";
import PropTypes from 'prop-types';


const All_Recipe = ({ handle_recipe_cart }) => {
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
            <div className="grid grid-cols-2 gap-">
                {recipes.map((recipe) => (
                    <Recipe_Cart handle_recipe_cart={handle_recipe_cart} key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};


All_Recipe.propTypes = {
    handle_recipe_cart: PropTypes.func.isRequired
}
export default All_Recipe;