
import { useState } from 'react'
import './App.css'
import All_Recipe from './Components/All_Recipe/All_Recipe'
import Header from './Components/Header/Header'
import Recipe from './Components/Recipe/Recipe'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

  const [recipe_queue, set_recipe_queue] = useState([]);
  const [preparing_recipe, set_preparing_recipe] = useState([]);
  const [total_time, set_total_time] = useState(0);
  const [total_calories, set_total_calories] = useState(0);

  const handle_time_and_calories = (time, calories) => {
    set_total_time(total_time + time);
    set_total_calories (total_calories + calories);
  }

  const handle_remove_recipe = (id) => {
    // fine whice recipe to remove
    const delete_recipe = recipe_queue.find(recipe => recipe.id === id);
    // remove from want to cook table
    const update_queue = recipe_queue.filter(recipe => recipe.id !== id);
    set_recipe_queue(update_queue);
    set_preparing_recipe([...preparing_recipe, delete_recipe])
  }

  const handle_recipe_cart = (recipe) => {
    const is_exit = recipe_queue.find((previous_recipe) => previous_recipe.id === recipe.id);

    if (!is_exit) {
      set_recipe_queue([...recipe_queue, recipe]);
    }
    else {
      alert ('This Recipe is Already Added....')
    }
  }

  return (
    <div>
      <Header></Header>
      <Recipe></Recipe>
      <div className='grid grid-cols-5 gap- w-[1320px] mx-auto'>
        <All_Recipe handle_recipe_cart={handle_recipe_cart}></All_Recipe>
        <Sidebar 
        total_time={total_time}
        total_calories={total_calories}
        handle_time_and_calories={handle_time_and_calories} 
        preparing_recipe={preparing_recipe} 
        handle_remove_recipe={handle_remove_recipe} 
        recipe_queue={recipe_queue}>

        </Sidebar>
      </div>
    </div>
  )
}

export default App
