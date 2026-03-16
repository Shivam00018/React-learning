import { useState } from "react"
export default function Ludoboard(){
    let [moves, Setmoves] = useState({blue:0, green:0, red:0, yellow:0});
   // let [bluemove, setbluemove] = useState(0);
   // let [yellowmove, setyellowmove] = useState(0);
   // let [greenmove, setgreenmove] = useState(0);
   // let [redmove, setredmove] = useState(0);

   let updateblue = () => {
    
    console.log(moves)
    Setmoves({...moves,blue:moves.blue +1})
   }

    let updateyellow = () => {
    
    console.log(moves)
    Setmoves({...moves,yellow:moves.yellow +1})
   }

    let updategreen = () => {
    
    console.log(moves)
    Setmoves({...moves,green:moves.green +1})
   }

    let updatered = () => {
    
    console.log(moves)
    Setmoves((prevmoves) => {
       
           return  {...prevmoves,red:prevmoves.red + 1}
        
    });
   }
    return(
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>blue move = {moves.blue}</p>
                <button style={{backgroundColor :"blue" }} onClick={updateblue}>+1</button>
                <p>yellow move = {moves.yellow}</p>
                <button style={{backgroundColor :"yellow" }} onClick={updateyellow}>+1</button>
                <p>green move = {moves.green}</p>
                <button style={{backgroundColor :"green" }} onClick={updategreen}>+1</button>
                <p>red move = {moves.red}</p>
                <button style={{backgroundColor :"red" }} onClick={updatered}>+1</button>
            </div>
        </div>
    )
}