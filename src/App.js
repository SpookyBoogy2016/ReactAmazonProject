import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Subheader from "./components/Subheader";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Subheader />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Subheader />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
