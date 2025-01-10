import PropTypes from 'prop-types';
import { MdOutlineWatchLater } from "react-icons/md";
import { RiFireLine } from "react-icons/ri";

const Recipe_Cart = ({ recipe, handle_recipe_cart }) => {
    const { name, img, title, ingredients, time, calories } = recipe;
    return (
            <div className='border border-[#28282833] rounded-2xl p-6 w-[379px] mb-5'>
                <img className='w-[331px] h-[200px] rounded-2xl' src={img} alt="" />
                <h3 className='text-xl font-semibold text-[#282828] mt-6'>{name}</h3>
                <p className='text-[#878787] mt-4'>{title}</p>
                <div className="divider"></div>
                <ul className=' '>
                    <p className='text-[18px] font-medium'>Ingredients: {ingredients.length}</p>
                    {
                        ingredients.map((ingredient, idx) => <li key={idx} className='text-[#878787] pl-4 list-disc mt-4'>{ingredient}</li>)
                    }
                </ul>
                <div className="divider"></div>
                <div className='flex gap-5'>
                    <div className='flex items-center gap-2 text-[#282828CC]'>
                        <MdOutlineWatchLater />
                        <p>{time}</p>
                    </div>
                    <div className='flex items-center gap-2 text-[#282828CC]'>
                        <RiFireLine />
                        <p>{calories}</p>
                    </div>
                </div>
                <button onClick={() => handle_recipe_cart (recipe)} className='text-[18px] btn bg-[#0BE58A] mt-7 py-[13px] px-6 rounded-full'>Want to Cook</button>
            </div>
    );
};

Recipe_Cart.propTypes = {
    recipe: PropTypes.object.isRequired,
    handle_recipe_cart: PropTypes.func.isRequired
}
export default Recipe_Cart;