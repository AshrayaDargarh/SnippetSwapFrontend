import React, { useEffect, useState } from 'react'
import View from './View'
import { Link,useNavigate } from 'react-router-dom'
import useSnippets from '../utils/useSnippets'
const ViewList = () => {
   // Code inside useView
    const snippets=useSnippets()
   
  return (
    <section className="md:px-32 px-4 py-8 mt-4 ">
     <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {snippets.length===0? <div><p >No snippet found!</p></div>:snippets.map((snippet)=>{return <Link to={'/viewupdate/'+snippet._id} key={snippet._id}><View key={snippet._id}  {...snippet}/> </Link> })}
    </div>
    </section>
  )
}

export default ViewList