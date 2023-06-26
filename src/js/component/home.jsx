import React from "react";

import Board from "./board.jsx";

import Footer from "./footer.jsx";

import Keyboard from "./keyboard.jsx";
import {createContext, useState} from "react";
import { boardDefault } from "./words.jsx";
export const AppContext = createContext();

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const App = () => {
	const [board, setBoard] = useState(boardDefault);
	const [currAttempt,setCurrAttempt] = useState({attempt:0,letterPos:0});
	
	const correctWord = "RIGHT";

	const onSelectLetter =(KeyVal)=>{
		if(currAttempt.letterPos > 4) return;
		const newBoard = [...board]
		newBoard[currAttempt.attempt][currAttempt.letterPos]= KeyVal
		setBoard(newBoard)
		setCurrAttempt({...currAttempt, letterPos:currAttempt.letterPos + 1})
	}

	const onDelete =()=>{
		if(currAttempt.letterPos === 0) return;
		const newBoard = [...board]
		newBoard[currAttempt.attempt][currAttempt.letterPos - 1]= "";
		setBoard(newBoard)
		setCurrAttempt({...currAttempt, letterPos:currAttempt.letterPos - 1})
	}

	const onEnter =()=>{
		if(currAttempt.letterPos !== 5) return;
		setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos:0});
	}

	return (
		<div className="App">
			<nav>
				<h1>Wordle by Rodrigo Almeida</h1>
				<AppContext.Provider 
					value={{board,
					setBoard,
					currAttempt,
					setCurrAttempt,
					onSelectLetter,
					onDelete,
					onEnter,
					correctWord,}}>
					<Board/>
					<Keyboard/>
					<div className="mt-5">
						<Footer/>
					</div>
				</AppContext.Provider>
			</nav>
		</div>
	);
};

export default App;
