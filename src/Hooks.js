import React, { useState } from 'react';
function Ab(){
    return(
        <div>
        <h1>COUNT YOUR CLICKS</h1>
        <MyButton/>
        </div>
    )
}
function MyButton(){
    const [x,y] = useState(0);
    function a(){
        y(x+1);
    }
    return(
       <button onClick={a}>
       Clicked {x} Times 
       </button>
    )
}
export default Ab;