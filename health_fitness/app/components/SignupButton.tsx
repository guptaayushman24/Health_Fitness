'use client'
import { useRouter } from "next/navigation"
export default function SignupButton(){
    const router = useRouter();
    return(
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={()=>router.push('/signup')}>Signup</button>
    )
}