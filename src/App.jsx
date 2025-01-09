
import './App.css'
import All_Recipe from './Components/All_Recipe/All_Recipe'
import Header from './Components/Header/Header'
import Recipe from './Components/Recipe/Recipe'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

  return (
    <div>
      <Header></Header>
      <Recipe></Recipe>
      <div className='grid grid-cols-3 gap-6 w-[1320px] mx-auto'>
        <All_Recipe></All_Recipe>
        <Sidebar></Sidebar>
      </div>
    </div>
  )
}

export default App
