import { Route, Switch } from "react-router-dom";

import ContratoLocacao from "./components/ContratoLocacao/ContratoLocacao";
import React from "react";


const App = () => {
  return (
    <div>
        <Switch>
            <Route exact path="/contrato-generator/">
                <ContratoLocacao />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
