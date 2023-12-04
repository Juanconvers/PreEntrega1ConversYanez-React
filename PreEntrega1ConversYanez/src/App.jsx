
import { useState } from 'react'
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import FontBold from './components/Fonts/FontsBold';
import FontRegular from './components/Fonts/FontRegular';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{fontFamily: "montserrat", width: "100vw", height: "100vh"}}>
        <NavBarComponent/>
        <ItemListContainer greeting="¡Bienvenidos a la mejor tienda de Moda Infantil!"/>
      </div> 
    </>
  )
}

export default App
