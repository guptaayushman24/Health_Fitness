"use client";
import { useState ,useEffect} from "react";
import { useContext } from "react";
import { useAppContext } from "../Context/AppContext";
import { useRouter } from "next/navigation";
export default function () {
    const context = useAppContext();
    const router = useRouter();
    const { exercisetype, setexercisetype, exercisename, setexercisename, exercisebenifit, setexercisebenifit,video,setvideo } = useAppContext();

    useEffect(() => {
    }, [context.exercisetype, context.exercisename, context.exercisebenifit,context.video]);
    const [selectedCategory, setSelectedCategory] = useState("Cardio");
    
    // Example card data for each category
    const exercises:any=  {
        "Cardio": [
            { id: 1, name: "Jump Rope", description: "Great for warm-ups.",videolink:"https://youtu.be/55ADf7AXbKA?si=2gz6PTyo0jjpoSOP" },
            { id: 2, name: "Running", description: "Boosts stamina and endurance." ,videolink:"https://youtu.be/55ADf7AXbKA?si=2gz6PTyo0jjpoSOP"}
        ],
        "Body Weight Exercise": [
            { id: 3, name: "Push-ups", description: "Strengthens chest and arms.",videolink:"https://youtu.be/i9sTjhN4Z3M?si=6NHmcQtQsS027KPM" },
            { id: 4, name: "Squats", description: "Improves leg strength and mobility.",videolink:"https://youtu.be/YaXPRqUwItQ?si=zmBuzD2vMbunIGIY"},
            { id: 5, name: "Situps", description: "Strengthening and toning core muscles, improving posture, and enhancing overall functional fitness",videolink:"https://youtu.be/UMaZGY6CbC4?si=bzun4kTrHd2TA_Vz"}
        ]
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-purple-500 p-4 text-white flex flex-col gap-4">
                <button
                    className={`p-2 rounded-md ${selectedCategory === "Cardio" ? "bg-purple-700" : ""}`}
                    onClick={() => setSelectedCategory("Cardio")}
                >
                    Cardio
                </button>
                <button
                    className={`p-2 rounded-md ${selectedCategory === "Body Weight Exercise" ? "bg-purple-700" : ""}`}
                    onClick={() => setSelectedCategory("Body Weight Exercise")}
                >
                    Body Weight Exercise
                </button>

                <button
                    className={`p-2 rounded-md ${selectedCategory === "AI and BMI bases meal" ? "bg-purple-700" : ""}`}
                   onClick={()=>router.push('/bmimeal')}
                >
                   AI and BMI bases meal
                </button>

            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 bg-purple-400">
                <h2 className="text-xl font-bold text-white mb-4">{selectedCategory} Exercises</h2>
                
                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {exercises[selectedCategory].map((exercise:any) => (
                        <div key={exercise.id} className="bg-white p-4 rounded-md shadow-md" onClick={() => {
                            setexercisename(exercise.name);
                            setexercisetype(selectedCategory);
                            setexercisebenifit(exercise.description);
                            setvideo(exercise.videolink)
                            router.push('/exercise');
                          }}>
                            <h3 className="text-lg font-semibold">{exercise.name}</h3>
                            <p className="text-gray-600">{exercise.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
