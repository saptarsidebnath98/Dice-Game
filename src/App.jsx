import StartingPage from "./components/StartingPage";
import GamePlay from "./components/GamePlay";
import { useState } from "react";

function App() {
  const [startGame, setStartGame] = useState(false);

  const handlePlay = () => {
    setStartGame(prevState => !prevState);
  }

  return (
    <div className="flex justify-center items-center h-screen font-Poppins">
      {startGame ? <GamePlay/> : <StartingPage onClick={handlePlay}/>}
    </div>
  )
}

export default App
