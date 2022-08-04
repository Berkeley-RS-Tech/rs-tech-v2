import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';
import reportWebVitals from "./reportWebVitals";
import SignIn from "./sign_in";
import SignUp from "./sign_up";
import Forgot from "./forgot_password";
import LinkTree from "./link_tree";
import CheckedIn from "./checked_in";
import { Routes } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import SocialNetwork from "./social_network";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" exact element={<SignIn />} />
      <Route path="/social_network" exact element={<SocialNetwork />} />
      <Route path="/sign_up" exact element={<SignUp />} />
      <Route path="/forgot_password" exact element={<Forgot />} />
      <Route path="/link_tree" exact element={<LinkTree />} />
      <Route path="/checked_in" exact element={<CheckedIn />} />
    </Routes>
  </Router>
  //   <React.StrictMode>
  //    <SignIn />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
