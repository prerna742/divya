import React, { useState } from 'react';
function Colour(){
    return(
        <div>
        <h1> YOUR FAVRIOTE COLOUR IS </h1>
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
       Pink {x} Colour
       </button>
    )
}
export default Colour;
