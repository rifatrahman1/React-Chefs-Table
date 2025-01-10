
import { useState } from 'react'
import './App.css'
import All_Recipe from './Components/All_Recipe/All_Recipe'
import Header from './Components/Header/Header'
import Recipe from './Components/Recipe/Recipe'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

  const [recipe_queue, set_recipe_queue] = useState([]);

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
      <div className='grid grid-cols-3 gap- w-[1320px] mx-auto'>
        <All_Recipe handle_recipe_cart={handle_recipe_cart}></All_Recipe>
        <Sidebar recipe_queue={recipe_queue}></Sidebar>
      </div>
    </div>
  )
}

export default App
