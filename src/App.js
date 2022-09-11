import React, {useEffect, useState}from "react"; 

// The React useState Hook allows us to track state in a function component.
// State generally refers to data or properties that need to be tracking in an application.

// What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.


import SquareComponent from "./SquareComponent";
import Button from 'react-bootstrap/Button';

const initialState=["","","","","","","","",""];

function App() {
  const [gameState, updategameState] = useState(initialState); // creating a gameState variable that make our box null (by using initialState variable which we was declared above)
const [isXchance, updateXchance]=useState(false); 

// Above code means that if onsquareClicked call the var - isXchance then make the usestate false and follow if else property;

const onSquareClicked=(index)=>{
  let string =  Array.from(gameState);
  string[index]=isXchance?"X":"O";
  // Aftrer this statement we need to udate our gameStatestate so we do this below
  updategameState(string);
  updateXchance(!isXchance) // update x chance as boolean 


}

// Here we check the winner by already maked function in React official site , we just have to copy the code of check winner from there 
const checkWinner=()=>{
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
for (let i = 0; i < lines.length; i++) {
  const [a, b, c] = lines[i];
  if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
    return gameState[a];
  }
}
return null;

}  

// Now we use the hook (use effect ) that if X or O got win then make a effect

useEffect(() => {
  let winner = checkWinner();
  if (winner) {
    updategameState(initialState)
      alert(`Huuray  ! ${winner} won the Game !`)
  }
  
}, [gameState])




  return (
    <div className="App-header">
    <h1>TIC TAC TOE GAME 2022</h1>
  <div className='row j-center'>
     <SquareComponent className="b-bottom-r" state={gameState[0]}  onClick={()=>onSquareClicked(0)}   /> 
     <SquareComponent className="b-bottom-r"state={gameState[1]}  onClick={()=>onSquareClicked(1)}  />
      <SquareComponent className="b-bottom"state={gameState[2]}  onClick={()=>onSquareClicked(2)}  /></div>
  <div className='row j-center'>
     <SquareComponent className="b-bottom-r" state={gameState[3]}  onClick={()=>onSquareClicked(3)}  />
     <SquareComponent className="b-bottom-r"state={gameState[4]}  onClick={()=>onSquareClicked(4)}  />
      <SquareComponent className="b-bottom"state={gameState[5]}  onClick={()=>onSquareClicked(5)}  /></div>
  <div className='row j-center'>
     <SquareComponent className="b-r"state={gameState[6]}  onClick={()=>onSquareClicked(6)}  /> 
     <SquareComponent className="b-r"state={gameState[7]}  onClick={()=>onSquareClicked(7)}  /> 
     <SquareComponent state={gameState[8]}  onClick={()=>onSquareClicked(8)}  /></div>
     <br></br>
     <Button variant="light" onClick={()=>updategameState(initialState)} >Play Again</Button> 
      {/* in button we add on click add add updategameState with initialState which is empty  */}
     <p className="Name">Made by Akash Shah</p>
    </div>
   
  );
}

export default App;
