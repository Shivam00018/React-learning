import { useState } from "react";

export default function Counter() {
   let [count, setcount]= useState(0);

   function incCount(){
   setcount(count+1);
    console.log("Count!")
   }
   
    return(
    <div>
      <h3>Count ={count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
    )
}