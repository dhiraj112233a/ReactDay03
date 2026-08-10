import axios from 'axios'
import React, { useState } from 'react'

const Main = () => {
    const [students , setStudents]=useState([])
      
    axios.get(`https://jsonplaceholder.typicode.com/comments`).then((std)=>{
          setStudents(std.data)
    })
  return (
    <div className='container p-3 d-flex flex-column align-items-center'>
         <h1 className='text-center mb-4'>Comments List</h1>
         <div className='table-responsive w-100'>
           <table className='table table-striped table-hover table-bordered align-middle shadow-sm rounded overflow-hidden mx-auto'>
                <thead className='table-dark'>
                  <tr>
                      <th className='p-3'>Post Id</th>
                      <th className='p-3'>ID</th>
                      <th className='p-3'>Name</th>
                      <th className='p-3'>Email</th>
                      <th className='p-3'>Body</th>
                  </tr>
                </thead>
                <tbody>
                 {
                  students.map((e)=>(
                     <tr key={e.id}>
                        <td className='p-2'>{e.postId}</td>
                        <td className='p-2'>{e.id}</td>
                        <td className='p-2'>{e.name}</td>
                        <td className='p-2'>{e.email}</td>
                        <td className='p-2'>{e.body}</td>
                     </tr>
                  ))
                 }
                </tbody>
           </table>
         </div>
    </div>
  )
}

export default Main