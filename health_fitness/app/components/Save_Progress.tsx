'use client'
import axios from "axios"
import { useAppContext } from "../Context/AppContext";
export default function SaveProgress(){
    const { exercisetype, setexercisetype, exercisename, setexercisename, exercisebenifit, setexercisebenifit, video, timer,settimer } = useAppContext();
    async function savetheprogress(){
        try {
            const result = await axios.post('http://localhost:3000/api/saveresponse', {
                exercisetype: exercisetype, 
                exercisename: exercisename,
                exercisebenifit: exercisebenifit,
                duration:timer
            });
    
            console.log("Response:", result.data);
        } catch (error:any) {
            console.error("Error saving progress:", error.response?.data || error.message);
        }
    }
   return(
    <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-purple-300 transition" onClick={savetheprogress} >
    Save the Progress
 </button>
   )
}