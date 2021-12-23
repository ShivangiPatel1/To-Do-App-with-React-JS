import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Error from "./components/Error";
import About from "./components/About";
import ThemeProvider from "./components/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
    <div className="todoapp stack-large">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </div>
    </ThemeProvider>
  );
};

export default App;
