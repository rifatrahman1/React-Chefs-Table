import PropTypes from 'prop-types';

const Sidebar = ({recipe_queue}) => {
    console.log(recipe_queue);
    return (
        <div className="col-span-1 border border-[#28282833] rounded-2xl">
            <h1 className="text-2xl font-semibold text-center mt-8">Wand to Cook: {recipe_queue.length}</h1>
            <div className="divider px-20"></div>
            <div className="grid grid-cols-4 pl-10 font-medium text-[#878787]">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            <div className='flex items-center justify-between'>
                <p>{recipe_queue.name}</p>
                <p>{recipe_queue.price}</p>
                <p>{recipe_queue.calories}</p>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    recipe_queue: PropTypes.array.isRequired
}
export default Sidebar;