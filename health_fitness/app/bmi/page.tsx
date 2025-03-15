'use client'

import { useState } from "react";

export default function BMI_Calculator() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState<number | null>(null);

    function calculateBMI() {
        if (!weight || !height) {
            alert("Please enter both weight and height!");
            return;
        }


        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(height) / 100; // Convert cm to meters

        if (weightNum > 0 && heightNum > 0) {
            const bmiValue = (weightNum / (heightNum * heightNum)).toFixed(2);
            setBmi(parseFloat(bmiValue));
        } else {
            alert("Invalid values entered!");
        }
    }
    function generatediet() {
        alert("Generate");
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-purple-500 text-white p-6">
            <div className="bg-purple-700 p-6 rounded-xl shadow-lg w-80 text-center">
                <h1 className="text-2xl font-bold mb-4">BMI Calculator</h1>

                <input
                    className="w-full p-2 mb-3 rounded bg-white text-black"
                    placeholder="Enter Weight (kg)"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />

                <input
                    className="w-full p-2 mb-3 rounded bg-white text-black"
                    placeholder="Enter Height (cm)"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
               

                <button
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full"
                    onClick={calculateBMI}
                >
                    Calculate BMI
                </button>
                

                {bmi !== null && (
                    <div className="mt-4 text-lg font-semibold">
                        Your BMI is: <span className="text-yellow-300">{bmi}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
