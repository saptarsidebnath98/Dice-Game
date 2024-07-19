import Button from "./Button";
const StartingPage = ({onClick}) => {
  return (
    <div className="w-[1182px] flex justify-between items-center">
        <div>
        <img src="images/dices 1.png" alt="" />
        </div>
        <div className="flex flex-col items-end">
            <h1 className="text-[96px] font-bold">DICE GAME</h1>
            <Button text="Play Now" onClick={onClick}/>
        </div>
    </div>
  )
}

export default StartingPage