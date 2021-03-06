import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Homepage from "./components/bussearch/Homepage";
import Signup from "./components/signup/Signup";
import Reset from "./components/forgetpassword/Reset";
import Newpassword from "./components/forgetpassword/Newpassword";
import Ticketdetail from "./components/bussearch/Ticketdetail";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/frogetpassword" component={Reset} />
          <Route exact path="/ticketdetail" component={Ticketdetail} />
          <Route exact path="/:token" component={Newpassword} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
