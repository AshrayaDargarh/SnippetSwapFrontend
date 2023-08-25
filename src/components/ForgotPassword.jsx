import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BACKEND_API } from '../config';
const ForgotPassword = () => {
  const [email,setEmail]=useState({})
  function handleChange(e)
  {
    setEmail({
      ...email,
      [e.target.name]:e.target.value
    })
  }
  async function handleSubmit(e)
  {
    e.preventDefault()
    try
    {
     
      const res=axios.post(`${BACKEND_API}/auth/forgot-password`,email)
      toast.promise(res, {
        pending: "Please wait email is on the way...",
        success: "Please check you mail.", 
        error: "Email does not exist.", 
      });
    }
    catch(err)
    {
      if(err.response)
      {
        const {status}=err.response
        if(status===400)
        {
          toast.warn('Email does not exist.');
        }
      }
    }
  }
  return (
    <div className="flex items-center justify-center mt-20">
    <div className="bg-[#2E2E2E] p-8 rounded-lg shadow-lg max-w-md">
      <h3 className="text-2xl font-bold text-[#FFFFFF] text-center">Forgot your password?</h3>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className=" text-[#FFFFFF]">Enter your email</label>
          <input type="email" placeholder='name@company.com' name="email" id="email" className="px-4 py-2 border bg-[#1d1b1b] border-gray-300 rounded-lg"  onChange={handleChange} required/>
        </div>
      
        <button type="submit" className="mt-4 px-6 py-3 bg-blue-500 text-[#FFFFFF] rounded-lg hover:bg-blue-600 w-full">Submit</button>
      </form>
    </div>
      <ToastContainer
         position="top-center"
         autoClose={4000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         theme="dark"
         draggable
         pauseOnHover
      />
  </div>
    // <div className='h-screen'>
    //   <div className="flex justify-center mt-10">
    //     <div className="bg-slate-800 drop-shadow-2xl rounded-md sm:p-10 p-5 flex">
    //       <form onSubmit={handleSubmit}>
    //         <p className='text-xl'>Forgot your password?</p>
    //         <div className='mt-5'>
    //           <label htmlFor="email" className="block text-sm">
    //             Enter your email
    //           </label>
    //           <input type="text" placeholder='name@company.com' name="email" id="email" className='bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg' onChange={handleChange} required />
    //         </div>
    //         <div>
          
      
    //         </div>
    //         <div className="mt-4 flex flex-col items-center justify-center">
    //           <button className="bg-sky-700 px-20 py-1 rounded-lg">Submit</button>
    //         </div>
           
    //       </form>
    //     </div>
    //   </div>
    //   <ToastContainer
    //     position="top-center"
    //     autoClose={4000}
    //     hideProgressBar={false}
    //     newestOnTop={false}
    //     closeOnClick
    //     rtl={false}
    //     pauseOnFocusLoss
    //     draggable
    //     pauseOnHover
    //     theme="dark"
    //   />
    // </div>
  )
}

export default ForgotPassword