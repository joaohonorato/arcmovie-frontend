import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import MovieDetails from "./components/movies/MovieDetails";
import About from "./pages/About";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/movies/:id" component={MovieDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
