import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./pages/products/Products";
import Home from "./pages/home/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/product/:product" component={Products} />
          <Route Path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
