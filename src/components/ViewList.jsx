import React, { useEffect, useState } from 'react'
import View from './View'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Triangle } from 'react-loader-spinner'
import useSnippets from '../utils/useSnippets'
const ViewList = () => {
    // const [snippets,setSnippets]=useState([])
    // const navigate=useNavigate()
    // useEffect(()=>{
    //     getSnippets()
    // },[])
    // async function getSnippets()
    // {
    //     try {
    //     const token=localStorage.getItem('token')
    //     const res=await axios.get('https://snippetswap-api.onrender.com/view',{headers:{'Authorization':`Bearer ${token}`}})
    //         setSnippets(res.data)
    //         // console.log('user=',res.data[0].user)
    //     } 
    //     catch (error) {
    //          navigate('/unauthorized')
    //         console.log(error.response)
    //     }
    // }
    const snippets=useSnippets()
  return (
    <div className='flex flex-col min-h-screen'>
    <div className='flex flex-wrap  justify-center   gap-8  m-20 ' >
        {snippets.length===0? <Triangle
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/>:snippets.map((snippet)=>{return <Link to={'/viewupdate/'+snippet._id} key={snippet._id}><View key={snippet._id}  {...snippet}/> </Link> })}
    </div>
    </div>
  )
}

export default ViewList