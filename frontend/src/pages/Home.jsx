import React from 'react'
import { HiChatAlt2 } from "react-icons/hi";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-between max-w-sm sm:max-w-2xl mx-20 lg:mx-42 rounded-lg bg-[#ffc179] p-14 mt-48">
      <div className="flex flex-col items-center  gap-12 ">
        <h1 className='text-4xl flex flex-row gap-4 font-medium '><HiChatAlt2 /> Chatio Chat</h1>
        <p className="text-md">Enter name you like</p>
        <input type='text' placeholder='Name' className=' py-4 bg-[#f0eb90] font-sm text-sm sm:text-lg border-spacing- border-1 outline hover:outline-red-500 rounded-lg p-2 px-16 " ' />
        <Link to="/chat">
          <button className='bg-black hover:bg-blue-700 p-3 px-12 rounded-xl text-white font-medium  ' type='submit'>Start Chat</button>

        </Link>



      </div>


    </div>
  )
}

export default Home