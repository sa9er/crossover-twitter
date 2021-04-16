import React from 'react';
import {Link} from "react-router-dom";

//css component
import './Tweets.css';



//Import Components
import Tweet from './Tweet';

const Tweets = ({fetched}) => {
          
    return (
    <div className="tweets-body">
        <div className="searchbar">
            <input type="text" placeholder="Search Twitter"/>
                <div id="navbar">
                    <div className="navbar-menu">
                        <ul clasNames="navbar-links">
                        <li className="navbar-item"><a className="navbar-link" href="/top">Top</a></li>
                        <li className="navbar-item"><a className="navbar-link" href="/latest">Latest</a></li>
                        <li className="navbar-item"><a className="navbar-link" href="/people">People</a></li>
                        <li className="navbar-item"><a className="navbar-link" href="/photos">Photos</a></li>
                        <li className="navbar-item"><a className="navbar-link" href="/videos">Videos</a></li>
                        </ul>
                    </div>
                </div>
        </div>
         <sections classname="tweets-array">
           <ul>
             {fetched.map(i => <li><Link tweet={i.tweet} to={`/SingleTweet/${i._id}`}>{i.tweet}</Link></li>)} 
           </ul>
        </sections> 
    </div>
);
    };

export default Tweets;


// {/* <Tweet tweet={i.tweet} author={i.author}/> */}