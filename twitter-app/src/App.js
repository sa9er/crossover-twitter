import React, { useEffect, useState, useParams } from "react";
import './App.css';
import {Switch, Route, NavLink, HashRouter as Router} from "react-router-dom";
import tweetSample from './components/tweetSample.json';

//Import Components
import Nav from "./components/Nav";
import Tweets from "./components/Tweets";
import SearchCol from "./components/SearchCol";
import SingleTweet from './components/SingleTweet'

const App = () => {

    const [fetchedUser, setFetchedUser] = useState([]);
    const [fetched, setFetched] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
            
        useEffect( () => {
            fetch("https://mini-twitter-group2.herokuapp.com/tweets")
              .then( res => res.json())
              .then( json => {
                setFetched(json);
                setIsLoading(false);
        
              })
              .catch( () => console.log("request failed "))
             
          }, [])
          console.log(fetched);

               
        useEffect( () => {
          fetch("https://mini-twitter-group2.herokuapp.com/users")
            .then( res => res.json())
            .then( json => {
              setFetchedUser(json);
              setIsLoading(false);
      
            })
            .catch( () => console.log("request failed "))
           
        }, [])
        console.log(fetched);



  
  return (
    <div className="App">
      <h1>Twitter Page Group 2</h1>
      <div className="home">
      
      <Nav />
   
      <Switch>
        <Route exact path="/">
          <Tweets  fetched={fetched} />
        </Route>
        <Route  path="/SingleTweet/:id">
        <SingleTweet  fetched={fetched} fetchedUser={fetchedUser}/>
        </Route>
      </Switch>
  


      <SearchCol />
    </div>
    </div>
  );
};

export default App;


//Example Slide 3:
// Router:
// / → <Tweets />
// /:tweetId → <Tweet />

/*
<Router>
<Switch>
  <Route path="/users">
  </Route>
  <Route path="/users/:id">
  </Route>
  <Route path="/tweets">
  </Route>
  <Route path="/tweets/:id">
  </Route>
  <Route path="/users/:id/tweets">
  </Route>

</Switch>
</Router>
*/