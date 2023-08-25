import React from 'react'
import { useMemo,useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BACKEND_API } from '../config'
import axios from 'axios'
const useSnippets = () => {
    const [snippets,setSnippets]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        getSnippets()
    },[])
    async function getSnippets()
    {
        try {
        const token=localStorage.getItem('token')
        const res=await axios.get(`${BACKEND_API}/view`,{headers:{'Authorization':`Bearer ${token}`}})
            setSnippets(res.data)
            // console.log('user=',res.data[0].user)
        } 
        catch (error) {
             navigate('/unauthorized')
            console.log(error.response)
        }
    }
    const memorizedSnippets=useMemo(()=>snippets,[snippets])
  return memorizedSnippets
}

export default useSnippets