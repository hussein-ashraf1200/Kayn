import React from 'react'
import logo from "../components/asests/logo.jpg"
import { CiMail } from "react-icons/ci";


const Login = () => {
  return (
    <div className='flex flex-row '>
     <div className='w-1/2  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... mt-4 rounded-lg flex-col '>

        <div className='flex justify-center items-center'>
          <img className='w-16  pt-4 rounded-2xl' src= {logo} alt=""/>
        </div>


        <div className='flex flex-col text-base sm:text-lg md:text-xl'>
         <h1 className=' font-bold text-black flex justify-center items-center mt-20 '>Share.Shop.Enjoy</h1>
         <p className='font-bold flex justify-center items-center mt-8 text-base sm:text-lg md:text-xl '>Discver, Ours Products</p>
        </div> 

      <div className='flex flex-col mt-20 '>
        <p className='text-white flex justify-center items-center mb-4 '>New Here?</p>
        <div className='flex justify-center items-center'>
        <button className='border solid bg-white  w-24 mb-20 rounded-xl font-bold
        
        '>Sign Up</button>
        </div>

    </div>
     </div>

        <div className='w-1/2 mt-4 rounded-lg pl-4 '>
        <div className='flex-col  justify-center items-center'>
          <p className='mt-4 font-bold'>Login To Your Account</p>
  <div class="pr-4 felx ">
  <p className='mt-4 font-bold'>Email</p>
  <input
     
    type="email" 
    placeholder="Enter Your Email" 
    class="pl-10 pr-4 py-2 w-1/2 border border-green-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
  <div class="pr-4 felx ">
  <p className='mt-4 font-bold mr-0'>Password</p>
  <input
     
    type="text" 
    placeholder="Enter Your Password" 
    class="pl-10 pr-4 py-2 w-1/2 border border-green-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <p className='underline decoration-solid mt-2 text-green-600 cursor-pointer'>Forget Passwrod?</p>
</div>
 
        </div>
        </div>
    </div>
  )
}

export default Login
