import { Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home.js";
import NavBar from "./Components/NavBar/NavBar.js";
import Display from "./Components/Display/Display.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:city" component={Display} />
      </Switch>
    </div>
  );
}

export default App;
