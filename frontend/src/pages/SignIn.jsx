import React from 'react'
import { FaSignInAlt } from "react-icons/fa";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-between ">
    <div className="flex flex-col items-center gap-12 min-w-11">
    <h1 className='text-3xl flex flex-row gap-4 font-medium mt-48'> <FaSignInAlt /> Sign In</h1>

     <input type='text' placeholder='Username' className=' py-4 bg-slate-100 font-sm text-lg  border-spacing-2 border-4 rounded-lg p-2 px-16 '/>
     <input type='text' placeholder='Password' className=' py-4 bg-slate-100 font-sm text-lg border-4 border-spacing-2 rounded-lg p-2 px-16'/>
     <button className='bg-blue-500 hover:bg-blue-700 p-3 px-12 rounded-xl text-white font-medium' type='submit'>SignIn</button> 

      <div className='flex flex-row'>
      <input
        id="remember-me"
        name="remember-me"
        type="checkbox"
        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
      />
      <label htmlFor="remember-me" className="ml-2 block text-sm font-medium text-gray-900 hover:text-purple-600">
        Remember me
      </label>
   
     <div className="text-sm px-5 font-medium">

      <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
        Forgot your password?
      </a>
    </div> 
      </div>
    </div>

    
  </div>
  )
}

export default SignIn