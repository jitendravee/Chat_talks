import React from 'react'
import { Link } from 'react-router-dom';
import { HiChatAlt2 } from "react-icons/hi";
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";

const Nav = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toogleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="bg-[#d1ecf1] p-4">

            <div className="flex flex-row justify-between ">
                <Link to='/'>
                    <h1 className='flex flex-row font-bold text-xl'>

                        <HiChatAlt2 className="bg-slate-300 rounded-lg" />
                        Chatio</h1>
                </Link> 
                <div className='sm:hidden text-lg'>
                <IoMenu onClick={toogleMenu}  />
                {showMenu && (

                    <>
                        <p className="flex flex-col gap-3 "><Link to='/signin'> Sign In</Link>
                            <Link to='/signup'>Sign Up</Link>
                            <Link to='/contact'>Contact Us</Link></p>
                    </>
                )}
            </div>
                <div className='hidden sm:block '>
                    <>
                        <p className="flex gap-7 font-semibold text-lg ">
                            <Link to='/signin'> Sign In</Link>
                            <Link to='/signup'>Sign Up</Link>
                            <Link to='/contact'>Contact Us</Link>
                        </p> </>
                </div>
            </div>
           
        </div>

    )
}

export default Nav