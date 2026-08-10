import axios from 'axios'
import React, { useState } from 'react'

const Main = () => {
    const [students , setStudents]=useState([])
      
    axios.get(`https://jsonplaceholder.typicode.com/comments`).then((std)=>{
          setStudents(std.data)
    })
  return (
    <div className='container p-2'>
         <h1>Students List</h1>
         <table className='table table-bordered border border-4'>
              <tr>
                  <th className='border border-4 p-3'>Post Id</th>
                  <th className='border border-4 p-3'>ID</th>
                  <th className='border border-4 p-3'>Name</th>
                  <th className='border border-4 p-3'>Email</th>
                  <th className='border border-4 p-3'>Body</th>
              </tr>
               {
                students.map((e)=>(
                   <tr>
                     <>
                      <td className='border border-2 p-2'>{e.postId}</td>
                      <td className='border border-2 p-2'>{e.id}</td>
                      <td className='border border-2 p-2'>{e.name}</td>
                      <td className='border border-2 p-2'>{e.email}</td>
                      <td className='border border-2 p-2'>{e.body}</td>
                    </>
                   </tr>
                ))
               }
         </table>
    </div>
  )
}

export default Main