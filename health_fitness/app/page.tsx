import Image from "next/image";
import SigninButton from "./components/SigninButton";
import SignupButton from "./components/SignupButton";

export default function Home() {
  return (
   <>
    <div className="flex flex-col">
    <div className="w-full h-16 bg-violet-200 flex justify-end items-center p-4 space-x-4">
      <SigninButton></SigninButton>
      <SignupButton></SignupButton>
</div>
      <div className="flex flex-row">

        <div className="bg-purple-400 w-50 h-screen">
      </div> 

        <div className="bg-purple-400 w-screen h-screen flex items-center justify-center text-center text-5xl">
              Welcome to the Health and Fitness Tracker
</div>
      </div>
    </div>
  </>
  );
}
