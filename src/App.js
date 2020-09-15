import React from "react";
import BurgerBuilder from "./containers/burgerbuilder";
import Layout from "./components/layout/layout";
import Checkout from "./containers/checkout";
import { Route, Switch } from "react-router-dom";
import Orders from "./containers/orders";
import Login from "./containers/login/Login";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/Login" component={Login} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
