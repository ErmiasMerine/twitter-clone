import React, { useState } from 'react'
import "./TweetBox.css"
import {Avatar, Button} from "@material-ui/core";
import { db } from './firebase';
function TweetBox() {
    const[tweetMessage, setTweetMessage] = useState("");
    const[tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();
        db.collection('tweets').add({
            displayName: "Ermias Merine",
            username: "ErmiasMerine",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://media-exp2.licdn.com/dms/image/C5603AQE5QwjqqtnmHA/profile-displayphoto-shrink_400_400/0/1656168658084?e=1661990400&v=beta&t=5_wuj_XRFNTBWQxTi8DzQERsTiBJ5ss1MeR3da4iy0Q"
        })
        setTweetMessage("");
        setTweetImage("");
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar src= "https://media-exp2.licdn.com/dms/image/C5603AQE5QwjqqtnmHA/profile-displayphoto-shrink_400_400/0/1656168658084?e=1661990400&v=beta&t=5_wuj_XRFNTBWQxTi8DzQERsTiBJ5ss1MeR3da4iy0Q"
                />
                
                <input
                onChange={(e) => setTweetMessage(e.target.value)}
                value = {tweetMessage}
                placeholder = "Whats happening?" 
                type="text"
                />
                </div>
                <input 
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />
                <Button 
                onClick={sendTweet}
                type="submit" 
                className="tweetBox__tweetButton">
                Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox
