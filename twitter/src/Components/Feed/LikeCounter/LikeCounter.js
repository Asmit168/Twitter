import React, { useState } from "react";
import './LikeCounter.css'
function LikeBtn() {
    const [likes, setLikes] = useState(10);
  
    return <button className="likebtn" onClick={() => setLikes(likes + 1)}>{likes} </button>;
  }
  
  export default LikeBtn;