import './App.css'
import Header from "./components/header"
import Title from "./components/Title"
import ComponentePadre from './components/ComponentePadre'

function App() {
  return (
    <div>
        <Header/>
        <Title/>
        <ComponentePadre text={'Hola a todos y todas'}/>
    </div>
  )
}

export default App
