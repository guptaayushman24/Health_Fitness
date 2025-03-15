'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppContext } from "../Context/AppContext";
import { useSearchParams } from "next/navigation";
import Timer from '../components/Timer'
import SaveProgress from "../components/Save_Progress";
export default function () {
    const [displaytimer, setdisplaytimer] = useState(false);
    const { exercisetype, setexercisetype, exercisename, setexercisename, exercisebenifit, setexercisebenifit, video, timer,settimer } = useAppContext();
    useEffect(() => {

    }, [exercisetype, exercisename, exercisebenifit])
    function starttimer() {
        setdisplaytimer(true);
    }
    function savetheprogress(){
        
    }
    return (
        <div className="flex flex-col bg-purple-400 h-screen justify-center items-center text-center p-6">
            {/* Exercise Details */}
            <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg w-96">
                <div className="text-lg font-semibold">Exercise Type: <span className="font-normal">{exercisetype}</span></div>
                <div className="text-lg font-semibold">Exercise Name: <span className="font-normal">{exercisename}</span></div>
                <div className="text-lg font-semibold">Exercise Benefits: <span className="font-normal">{exercisebenifit}</span></div>
            </div>

            {/* Instructions */}
            <div className="mt-6 text-lg font-semibold text-white">How to do the {exercisename}</div>
            <Link href={`${video}`} className="mt-6 text-lg font-semibold text-white underline hover:text-purple-300 transition">
                <div>Click Here to See How to do the {exercisename}</div>
            </Link>

            {/* Start Button */}
            <div className="mt-6">
                <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-purple-300 transition" onClick={starttimer}>
                    Let's Start
                </button>
            </div>
            <div className="mt-5">
                {
                    displaytimer ? (
                        <Timer></Timer>
                    ) : (
                        null
                    )
                }
            </div>
            <div className="mt-5">
            
                <SaveProgress></SaveProgress>
            </div>
        </div>
    )
}