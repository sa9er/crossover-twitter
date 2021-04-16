import React from "react";
import {useParams} from 'react-router-dom';


const SingleTweet = ({tweet, fetched, fetchedUser}) => {
     
  
     const {id} = useParams();
     const singleTweet = fetched.find(i => i._id === id);
     const author = singleTweet? singleTweet.author : "loading";
     
     const user = fetchedUser ? fetchedUser.find(i => i._id ===  author) : "loading";
     console.log(singleTweet);

    return  singleTweet? (
        <div className="singleTweet">
        <h3>{user.name}</h3> 
        <p>{singleTweet.tweet}</p>
        <p>bio: {user.bio}</p>
        <p>email: {user.email}</p> 
        </div>
    ) : "loading";
}

export default SingleTweet;