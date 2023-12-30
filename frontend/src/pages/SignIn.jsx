import React from 'react'
import { FaSignInAlt } from "react-icons/fa";

const SignIn = () => {
  return (
    <div className="flex flex-col justify-center h-full max-w-6xl">
<h2 className="flex flex-row font-semibold text-lg gap-3 p-3"><FaSignInAlt />Sign In</h2>
<div className="flex flex-col">
Name 
<input type='Username' placeholder='Username' />
Passsword
<input type='text' placeholder='Password' />

</div>

    </div>
  )
}

export default SignIn