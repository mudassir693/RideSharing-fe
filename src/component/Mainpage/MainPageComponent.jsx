import React from 'react'
import './MainPageComponent.css'
import { useNavigate } from "react-router-dom";



// const style = {
//     container:{
//         backgroundImage: url('https://assets-global.website-files.com/5f2a93fe880654a977c51043/62bb2e0aa12e417fb99857eb_hero%20image%20-%20world.jpeg'),
//         objectFit:'cover'
//     }
// }
function MainPageComponent() {
    const navigate =useNavigate()
  return (
    <div className="main-page w-[100vw] h-[100vh]">
        <div className={`MainPageContainer w-[100%] h-[100%] flex justify-center items-end`}>
            <div className="text-white font-medium h-[35vh] md:h-[53%] text-1xl mt-5">
                <div className="text-white font-semibold text-5xl text-center">
                    Mr. Travel 
                </div>
                {/* <div className="text-white font-medium text-1xl text-center">
                    
                </div> */}
                <div className="btnContainer flex justify-around items-center w-[100%] my-5">
                    <div onClick={()=>navigate('/personalNavigation')} className="eachBtn mx-2 px-5 py-2 bg-white cursor-pointer border-color-[#66c6f4] border-2 text-black rounded-full">
                        Live Navigator
                    </div>
                    <div onClick={()=>navigate('/carNavigation')} className="eachBtn mx-2 px-5 py-2 bg-white cursor-pointer border-color-[#66c6f4] border-2 text-black rounded-full">
                        Find Cab
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainPageComponent