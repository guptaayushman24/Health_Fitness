'use client'
import { useState, useEffect } from 'react';
import { useAppContext } from "../Context/AppContext";
export default function Timer(){
    const { exercisetype, setexercisetype, exercisename, setexercisename, exercisebenifit, setexercisebenifit, video, timer,settimer } = useAppContext();
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      let intervalId: NodeJS.Timeout;
      if (isActive) {
        intervalId = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
      }
  
      return () => clearInterval(intervalId);
    }, [isActive]);
  
    const startTimer = () => setIsActive(true);
    // const pauseTimer = () => setIsActive(false);
    const pauseTimer=()=>{
        setIsActive(false);
        settimer(seconds);
    }
    const resetTimer = () => {
      setIsActive(false);
      setSeconds(0);
    };

    return(
        <div className="flex flex-col items-center bg-purple-400 text-white p-4 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-4">Timer: {seconds} sec</h1>
        <div className="flex space-x-2">
          <button onClick={startTimer} className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-sm font-semibold transition">
            Start
          </button>
          <button onClick={pauseTimer} className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-sm font-semibold transition">
            Pause
          </button>
          <button onClick={resetTimer} className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-sm font-semibold transition">
            Reset
          </button>
        </div>
      </div>
    )
}