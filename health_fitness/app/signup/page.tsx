"use client"; // Required for Next.js 13+ App Router

import { useState } from "react";
import signup from "../action/user";
import axios from 'axios'
import { useRouter } from "next/navigation";
export default function(){
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user", // Default role
  });

  const handleChange = (e:any)=> {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try{
      const response = await axios.post('http://localhost:3000/api/signup',{
        name:formData.name,
        email:formData.email,
        password:formData.password,
        role:formData.role 
      })
      console.log(response.status);
      if (response.status==200){
        console.log("Inside if");
        // router.re('/mainpage');
        router.push('/mainpage');

      }
      
    }
    catch(err){
      console.log(err);
    }

    // You can send this data to your backend API here
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Signup
        </h2>
        <form  className="space-y-4">
          {/* Name Field */}
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Email Field */}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Password Field */}
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Role Selection */}
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="user">Normal User</option>
            <option value="trainer">Trainer</option>
          </select>

          {/* Signup Button */}
          <button onClick={handleSubmit}
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
