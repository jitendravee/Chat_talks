import React from 'react'
import { MdEmail } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { RiAccountCircleFill } from "react-icons/ri";

const ContactUs = () => {
  return (
    <div className="items-center justify-between ">
<ul className="text-xl text-green-700 p-4 items-center mt-48 ml- inset-0  ml-96">
  <li className="flex flex-row mb-9"><MdEmail /> EmailId</li>
  <li className="flex flex-row mb-9"><BiSolidContact />Customer.NO</li>
  <li className='flex flex-row mb-9'><RiAccountCircleFill />  SocialMedia Accounts</li>
  
</ul>
    </div>



  )
}

export default ContactUs