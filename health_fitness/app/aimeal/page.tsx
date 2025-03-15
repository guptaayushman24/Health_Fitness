"use client";
import { useState } from "react";
import axios from "axios";

export default function DietPlan() {
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(1.75);
  const [age, setAge] = useState<number>(25);
  const [bmi, setBMI] = useState<string | null>(null);
  const [dietPlan, setDietPlan] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchDietPlan  = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/diet", { weight, height, age });
      console.log(response);
      setBMI(response.data.bmi);
      setDietPlan(response.data.dietPlan);
    } catch (error) {
      console.error("Error fetching diet plan:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md max-w-md mx-auto bg-white">
      <h2 className="text-xl font-bold mb-4">Diet Plan Generator</h2>

      <label className="block mb-2">Weight (kg)</label>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(Number(e.target.value))}
        className="border p-2 w-full mb-4 rounded"
      />

      <label className="block mb-2">Height (m)</label>
      <input
        type="number"
        step="0.01"
        value={height}
        onChange={(e) => setHeight(Number(e.target.value))}
        className="border p-2 w-full mb-4 rounded"
      />

      <label className="block mb-2">Age</label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        className="border p-2 w-full mb-4 rounded"
      />

      <button
        onClick={fetchDietPlan}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Diet Plan"}
      </button>

      {bmi && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="font-bold">BMI: {bmi}</h3>
          <h3 className="font-bold mt-2">Diet Plan:</h3>
          <p className="text-sm whitespace-pre-wrap">{dietPlan}</p>
        </div>
      )}
    </div>
  );
}
