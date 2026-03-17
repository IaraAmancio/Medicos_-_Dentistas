import React from "react";
import { Route, BrowserRouter} from "react-router-dom";

import Home from "./pages/home";
import { Formulario } from "./pages/cadastro";

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/"/>
            <Route component={Formulario} path="/cadastro"/>
        </BrowserRouter>
    )
}

export default Routes;