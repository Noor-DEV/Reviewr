import "./App.css";
import RestaurantList from "./components/RestaurantList";
import RestDetails from "./components/RestDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <RestaurantList />
          </Route>
          <Route path="/services/:id" exact>
            <RestDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
