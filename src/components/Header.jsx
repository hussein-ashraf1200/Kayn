import React from 'react'
import { CiPhone } from "react-icons/ci";
import { MdAttachEmail } from "react-icons/md";



const Header = () => {
  return (
    <div>
      <header className= 'bg-slate-200 rounded'>
        <div>
        <div className='flex flex-row justify-around items-center'>
        <div className='flex flex-row justify-start items-center'>        
          <CiPhone  />
          <p>+20 1210237824</p>
          </div>
        <div className='flex flex-row justify-start items-center'>
        <MdAttachEmail />
        <p>hussein061200@gmail.com</p>
        </div>

        </div>

        </div>

      </header>
    </div>
  )
}

export default Header
