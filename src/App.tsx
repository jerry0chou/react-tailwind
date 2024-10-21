import React, {useState} from 'react';
import LandingPage from "./components/LandingPage";
import Cards from "./components/Card";
import AvatarList from "./components/AvatarList";

export default function App(){
    const [id,setId] = useState(1);
    return(
        <div className="">
            <div className="flex flex-row gap-2 w-full justify-center items-center">
                <button type="button"
                        onClick={()=>setId(1)}
                        className="bg-pink-500 hover:bg-pink-600 text-indigo-100  font-bold mt-2 px-4 py-2 rounded-full text-xs ">LandingPage
                </button>
                <button type="button"
                        onClick={()=>setId(2)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-gray-700 hover:text-gray-900 font-bold mt-2 px-4 py-2 rounded-full text-xs ">AvatarList
                </button>
                <button type="button"
                        onClick={()=>setId(3)}
                        className="bg-blue-500 hover:bg-blue-600 text-indigo-100  font-bold mt-2 px-4 py-2 rounded-full text-xs ">Card
                </button>
            </div>
            <div className="h-[900px] mx-10 mt-5 overflow-y-scroll">
                {id === 1 && <LandingPage/>}
                {id === 2 && <AvatarList/>}
                {id === 3 && <Cards/>}
            </div>
        </div>
    )
}