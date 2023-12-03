import { useState } from 'react'

import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{width: "100vw", height: "100vh"}}>
        <NavBarComponent/>
        <ItemListContainer greeting="¡Bienvenidos!"/>
      </div> 
    </>
  )
}

export default App
