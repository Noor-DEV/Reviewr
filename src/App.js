import "./App.css";
import Context from "./components/Context";
import RestaurantList from "./components/RestaurantList";
import RestDetails from "./components/RestDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Context>
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
      </Context>
    </Router>
  );
}

export default App;
