import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate =useNavigate()
  return (
    <div className='w-[100vw] h-[50px] flex justify-center items-center relative'>
        <div onClick={()=>navigate('/')} className="md:hidden headerBackOption absolute left-[1rem] ">
            <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div className="HeaderContainer my-auto max-w-4xl w-100 bg-white text-black text-3xl text-center font-semibold mx-auto">
            Mr. travel
        </div>
    </div>
  )
}
