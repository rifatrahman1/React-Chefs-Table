import PropTypes from 'prop-types';

const Sidebar = ({ recipe_queue, handle_remove_recipe, preparing_recipe, handle_time_and_calories, total_calories, total_time }) => {
    return (
        <div className="col-span-2 border border-[#28282833] rounded-2xl">
            <h1 className="text-2xl font-semibold text-center mt-8">Wand to Cook: {recipe_queue.length}</h1>
            <div className="divider px-20"></div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recipe_queue.map((recipe, idx) => (
                                <tr className='hover' key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{recipe.name}</td>
                                    <td>{recipe.time}</td>
                                    <td>{recipe.calories}</td>
                                    <td>
                                        <button onClick={() => {
                                            handle_remove_recipe(recipe.id)
                                            handle_time_and_calories(recipe.time, recipe.calories)
                                        }}
                                            className=' bg-[#0BE58A] py-[13px] px-4 btn rounded-full'>Preparing</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <h1 className="text-2xl font-semibold text-center mt-16">Currently Cooking: {preparing_recipe.length}</h1>
            <div className="divider px-20"></div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            preparing_recipe.map((recipe, idx) => (
                                <tr className='hover' key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{recipe.name}</td>
                                    <td>{recipe.time}</td>
                                    <td>{recipe.calories}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tr className=''>
                        <th></th>
                        <th></th>
                        <th>Total time = {total_time}</th>
                        <th>Total calories = {total_calories}</th>
                    </tr>
                </table>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    recipe_queue: PropTypes.array.isRequired,
    handle_remove_recipe: PropTypes.func.isRequired,
    preparing_recipe: PropTypes.array.isRequired,
    handle_time_and_calories: PropTypes.func.isRequired,
    total_calories: PropTypes.array.isRequired,
    total_time: PropTypes.array
}
export default Sidebar;