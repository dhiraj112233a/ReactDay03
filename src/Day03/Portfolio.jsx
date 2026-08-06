import React from 'react'

const Portfolio = (props) => {
  const port = props.data2;
  return (
    <div>
        <hr />
        <div>
            <div className='text-center mt-lg-4 mt-2'>
                 <h1 className='display-4 fw-bold'>Awards & Accolades</h1>
                 <p>Our commitment to design excellence has been recognized by the industry's most prestigious institutions.</p>
            </div>
        </div>

       <div className='container'>
           <div className='row mt-lg-5 mt-2'>
            {
              port.map((item)=>{
                   return(
                        <div className='col-lg-4 p-2 '>
                             <div className='p-3 border border-4 rounded-5 btn btn-outline-dark'>
                                 <h2>{item.h2}</h2>
                                 <p>{item.p}</p>
                                 <a href="">{item.a}</a>
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

export default Portfolio
