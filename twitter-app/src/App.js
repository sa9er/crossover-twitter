import React from "react";
import './App.css';

//Import Components
import Nav from "./components/Nav";
import Tweets from "./components/Tweets";
import SearchCol from "./components/SearchCol";

const App = () => {
 
  return (
    <div className="App">
      <h1>Twitter Page Group 2</h1>
      <div className="home">
      <Nav />
      <Tweets />
      <SearchCol />
    </div>
    </div>
  );
};

export default App;
