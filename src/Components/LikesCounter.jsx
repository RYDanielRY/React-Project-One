import React, {useState} from "react";

const LikesCounter = () => {
    const  [likes, setLikes] = useState(0);

    const increment = () => { setLikes(likes + 1); }

    const decrement = () => { setLikes(likes - 1); }

    return (
        <div className="granica">
            <h1 className="a1">{likes}</h1>
            <button className="a" onClick={increment}>Increment</button>
            <br/>
            <button className="a" onClick={decrement}>Decrement</button>
        </div>
   );
}

/*function LikeCounter() {
    const  [likes, setLikes] = useState(0);

    function increment() {
        setLikes(likes + 1);
    }

    function decrement() {
        setLikes(likes - 1);
    }

    return (
        <div className="granica">
            <h1 className="a1">{likes}</h1>
            <button className="a" onClick={increment}>Increment</button>
            <br/>
            <button className="a" onClick={decrement}>Decrement</button>
        </div>
    )
}*/

export default LikesCounter;