import React from 'react'

const About = (props) => {
  const data1 = props.data;
  return (
    <div className='mt-lg-4 mt-2 '>
         <div className='p-lg-3 p-2 text-center'>
          <button className='btn btn-dark col-2 p-2 '>Active</button>
           <h1 className='display-5 fw-bold'>Comprehensive Design Services</h1>
           <p>From concept to completion, we offer a full spectrum of interior design services tailored to elevate every space.</p>
         </div>

         <div className='container'>
             <div className='row mt-lg-5 mt-3'>
            {
              data1.map((item)=>{
                  return (
                    <div className='col-lg-4 p-2 '>
                        <div className='bg-dark p-lg-3 p-2 border rounded-5'>
                            <p className='text-light'>{item.icon}</p>
                            <h1 className='text-light' >{item.h2}</h1>
                            <p className='text-light'>{item.p}</p>
                            <a className='text-light' href="">{item.a}</a>
                        </div>
                    </div>
                  )
              })
            }
         </div>
         </div>
    </div>
  )
}

export default About
