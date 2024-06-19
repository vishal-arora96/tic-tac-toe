import useTicTacToe from "../hooks/use-tic-tac-toe"

function TicTacToe() {
  const {board,handleClick,resetGame,getCurrentMessage} = useTicTacToe()

  return (
    <>
      <div className="game">
        <div className="status">
          {getCurrentMessage()}
          <button className='reset' onClick={resetGame}>Reset Game</button>
        </div>
        <div className="board">
          {board.map((value,index)=>{
            return <button className="cell" key={index} onClick={()=>handleClick(index)} disabled={value}>{value}</button>
          })}
        </div>
      </div>
    </>
  )
}

export default TicTacToe;
