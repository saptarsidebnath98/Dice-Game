import { useState } from "react";
import Button from "./Button";

const GamePlay = () => {
    const [randVal, setRandVal] = useState(1);
    const [selectedVal, setSelectedVal] = useState();
    const [score, setScore] = useState(0);
    const [error, setError] = useState(false);

    function getRandomVal(min, max){
        return Math.floor(Math.random() * (max - min) + min); 
    }
    const btns = [1, 2, 3, 4, 5, 6];

    const onDiceClick = () => {
        if(selectedVal === undefined){
            setError(true);
        }else{
            setRandVal(getRandomVal(1, 7));
            setError(false);
            if(selectedVal === randVal){
                setScore(prevScore => prevScore + randVal)
            }else{
                setScore(prevScore => prevScore - 2)
                }
        }
    }

    const clickBtn = (e) => {
        setSelectedVal(e.target.value);
    }

    console.log("Selected Val: ", selectedVal);
    console.log("Random Val: ",randVal)
    
    return (
        <div className="flex flex-col w-[80%] gap-5">
            <div className="flex justify-between py-2 h-[151px]">
                <div className="flex flex-col items-center justify-between">
                    <h1 className="text-8xl my-0">{score}</h1>
                    <p className="font-semibold">Total Score</p>
                </div>
                <div className="flex flex-col items-end justify-between ">
                    {error && <p className="text-red-700">Please Select a number</p>}
                    <div className="flex gap-[24px]">
                        {btns.map((btn, i) => 
                        <button className={`h-[72px] w-[72px] border-2 border-black flex justify-center items-center`} value={btn} onClick={clickBtn}
                        key={i}>{btn}</button>)}
                    </div>
                    <p className="font-semibold">Select Number</p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-[36px]">
                <button onClick={onDiceClick}>
                    <img src={`images/dice_${randVal}.png`} alt="dice1" className="h-[250px] w-[250px]"/>
                </button>
                <p className="font-semibold text-xl">click on Dice to roll</p>
                <Button text="Reset Score"/>
                <Button text="Show Rules" outLine={true}/>
            </div>
        </div>
    )
}

export default GamePlay