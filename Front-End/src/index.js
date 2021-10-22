/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Client from "layouts/Agriculteur";
import "assets/css/material-dashboard-react.css?v=1.9.0";

//import Register from "components/Register/SignIn";
import Register from "components/Register/Signup";
import Agriculteur from "components/Agriculteur/ListAnimal"
import Agriculteur2 from "components/Agriculteur/AddAnimal"
import AdminListAnimal from "views/Dashboard/ListeAnimal"
import AddPack from "components/Admin/Pack"
import  StatisticPack from "views/Pack/statistic"
const hist = createBrowserHistory();




ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/client" component={Client} />

      <Route path="/signin" component={Register} />
      <Route path="/signup" component={Register} />
      <Route path="/client/ListAnimal" component={Agriculteur} />
      <Route path="/client/AddAnimal" component={Agriculteur2} />
      <Route path="/addpack" component={AddPack} />
      <Route path="/statisticpack" component={StatisticPack} />

      <Route path="/client/ListAnimal" component={AdminListAnimal} />

      <Redirect from="/" to="/client/ListAnimal" />
      

    </Switch>
  </Router>,
  document.getElementById("root")
);
