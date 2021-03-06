import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Subheader from "./components/Subheader";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run once when app components load
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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
