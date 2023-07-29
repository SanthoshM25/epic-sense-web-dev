import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Card from "./components/Card";
import Button from "./components/Button";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/card">
          <Card />
        </Route>
        <Route path="/button">
          <Button />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// import statements

// function componentName(){
//   return JSX component
// }

// export the componentFunction
