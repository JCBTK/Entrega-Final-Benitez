import './App.css'
import ItemListContainer from './components/Main/ItemListContainer'
import NavBar from './components/Navbar/NavBar'

function App() {
  return (
    <div>
      <nav>
        <NavBar/>
      </nav>
      <main>
        <ItemListContainer Greeting="Hola Mundo!" />
      </main>
    </div>
    
  )
}

export default App
