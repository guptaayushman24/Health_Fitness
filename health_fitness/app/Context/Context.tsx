'use client'
import { createContext,useState,useContext ,ReactNode} from 'react'
// 1. Define the context type
interface AppContextType{
  exercisetype:string,
  setexercisetype:(value:string)=>void,
  exercisename:string,
  setexercisename:(value:string)=>void
  exercisebenifit:string,
  video:string,
  setvideo:(value:string)=>void
  setexercisebenifit:(value:string)=>void
  timer:number,
  settimer:(value:number)=>void
}
// 2. Create Context with default values
export const AppContext = createContext<AppContextType | null>(null);
// 3. Create Provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [exercisetype, setexercisetype] = useState("");
    const [exercisename, setexercisename] = useState("");
    const [exercisebenifit,setexercisebenifit] = useState("");
    const [video,setvideo] = useState("");
    const [timer,settimer] = useState<number>(0);
    return (
      <AppContext.Provider value={{ exercisetype, setexercisetype, exercisename, setexercisename, exercisebenifit, setexercisebenifit,video,setvideo ,timer,settimer}}>
        {children}
      </AppContext.Provider>
    );
  };
  
