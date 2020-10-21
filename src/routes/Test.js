import React, { useState } from "react";



function Test(){
    
    const [item, setItem]= useState(1);
    const incrementItem=()=>setItem(item+1);
    const decrementItem=()=>setItem(item-1);
    return <div>
        <h1 >{item}</h1>
        <button onClick={incrementItem}>+</button>
        <button onClick={decrementItem}>-</button>

        </div>
}
export default Test;