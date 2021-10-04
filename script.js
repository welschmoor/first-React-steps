'use strict';

// Rock Papers Scissors by Johannes Welsch, 4 Oct. 2021
// 

import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const availableMoves = [null, 'Rock', 'Paper', 'Scissors']

const App = () => {
    const [gameStartedS, setGameStartedS] = useState(false)
    const [gameState, setGameState] = useState('')

    const [playerChoiceS, setPlayerChoiceS] = useState(null)
    const [compChoiceS, setCompChoiceS] = useState(null)
    
    // game logic
    if (gameStartedS) {
        if (playerChoiceS === compChoiceS ) setGameState('tie')
        else if (playerChoiceS > compChoiceS && (Math.abs(playerChoiceS-compChoiceS)) < 2) setGameState('win')
        else if  (playerChoiceS < compChoiceS && (Math.abs(playerChoiceS-compChoiceS)) > 1) setGameState('win') 
        else setGameState('loss')            
        setGameStartedS(false) 
    }

    const onClickHandler = (e) => {
        e.preventDefault()
        // comp choice. If we run right now, it will be undefined, rerender component first with gameStartedS
        setCompChoiceS(Math.floor(Math.random()*3+1))
        setPlayerChoiceS(+e.target.value)
    
        setGameStartedS(true)  
    }

    return(
<div className="maindiv">
    <div className="message">{gameState ? `It's a ${gameState}`: <span>&nbsp;</span>}</div>
    <div className="playerchoices">{playerChoiceS ? availableMoves[playerChoiceS]: <span>&nbsp;</span>} : {compChoiceS ? availableMoves[compChoiceS]: <span>&nbsp;</span>}</div>
    <form className="form">
        <button type="submit" name="rock" value="1"  onClick={onClickHandler} >Rock</button>
        <button type="submit" name="rock" value="2"  onClick={onClickHandler} >Paper</button>
        <button type="submit" name="rock" value="3"  onClick={onClickHandler} >Scissors</button>
    </form>
</div>
)}
ReactDOM.render(<App/>, document.getElementById('root'));