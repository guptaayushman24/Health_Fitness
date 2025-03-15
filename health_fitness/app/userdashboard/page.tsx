export default function (){
    return(
        <div className="flex flex-col bg-purple-400 h-screen justify-center items-center text-center p-6">
             <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg w-96">
                <div className="text-lg font-semibold">Exercise Type: <span className="font-normal">{}</span></div>
                <div className="text-lg font-semibold">Exercise Name: <span className="font-normal">{}</span></div>
                <div className="text-lg font-semibold">Exercise Benefits: <span className="font-normal">{}</span></div>
            </div>
        </div>
    )
}