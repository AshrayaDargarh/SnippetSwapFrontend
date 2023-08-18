import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useAuth } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const[user,setUser]=useState({})
  const[isValid,setIsValid]=useState(true)
  const {login}=useAuth()
  const navigate=useNavigate()

  function handleChange(e)
  {
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }
  async function  handleSubmit(e)
  {
    e.preventDefault()
    try
    {
      const res= axios.post('https://snippetswap-api.onrender.com/auth/login',user)
      toast.promise(res, {
        pending: "Please wait for a while...",
        success: "Login successfully.", 
        error: "Invalid credentials!", 
      }).then((res)=>{
        setIsValid(true)
        login(res.data.token)
      navigate('/create')    
      })       
    }
    catch(err)
    {
      if(err.response)
      {
        const {status,data}=err.response
        
        if(status===400)
        {
          setIsValid(false)
        }
      }
    }
  }
  return (
    <div className='overflow-hidden h-screen'>
      <div className="flex justify-center mt-10">
        <div className="bg-slate-800 drop-shadow-2xl rounded-md sm:p-10 p-5 flex">
          <form onSubmit={handleSubmit}>
            <p className='text-xl'>Sign in to your account</p>
            <div className='mt-5'>
              <label htmlFor="email" className="block text-sm">
                Your email
              </label>
              <input type="text" placeholder='name@company.com' name="email" id="email" className='bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg' onChange={handleChange} required />
            </div>
            <div className='mt-3'>
              <label htmlFor="password" className="block text-sm">
                Password
              </label>
              <input type="password" placeholder="• • • • • • • • " name="password" id="password" className='bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg' onChange={handleChange} required/>
            </div>
            <div className='mt-2'>
              <span className='text-xs text-red-500'>{isValid?'':'Please enter correct email or password'}</span>
            </div>
            <div className='mt-3 text-sm'>
              <Link to='/forgotpassword' className='text-blue-500'>Forgot password</Link>
            </div>
            <div className="mt-3 flex flex-col items-center justify-center">
              <button className="bg-sky-700 px-20 py-1 rounded-lg" type='submit'>Sign n</button>
            </div>
            <p className='mt-4 text-sm'>
                Don't have an account yet? <Link to='/signup' className='text-blue-500'>Sign up</Link>
              </p>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      </div>
  );
}

export default Login