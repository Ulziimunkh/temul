import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
   <Navbar></Navbar>
    <Switch>
    <Route path="/" exact component = {Home}></Route>
    <Route component={Error}></Route>
    </Switch>
    </>
  );
}

export default App;