import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Cadastro from "./pages/cadastro";

export default function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastros" element={ <Cadastro/>}/>
      </Routes>
    </div>
  )
}

