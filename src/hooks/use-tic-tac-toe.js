import { useState } from 'react';
const useTicTacToe = ()=>{
    const initializeBoard = ()=>{return Array(9).fill(null)};
    const [board, setBoard] = useState(initializeBoard());
    const [isNextX, setIsNextX] = useState(true);

    const WINNING_LOGICS = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,7]
    ]

    const handleClick = (index)=>{
        const boardCopy = [...board];
        boardCopy[index] = isNextX?"X":"O";
        setIsNextX(!isNextX);
        setBoard(boardCopy);
    }

    const resetGame = ()=>{
        setBoard(initializeBoard());
        setIsNextX(true);
    }

    const getCurrentMessage = ()=>{
        for (let i = 0; i < WINNING_LOGICS.length; i++) {
            const [a,b,c] = WINNING_LOGICS[i];
            if(board[a] && board[a]===board[b] && board[a]===board[c]){
                return "Winner is "+(isNextX?"O":"X");
            }
        }
        if(!board.includes(null)) return "Game Draw";
        return "Next turn is " +(isNextX?"X":"O");
    }
    return {board,handleClick,resetGame,getCurrentMessage}
}

export default useTicTacToe;