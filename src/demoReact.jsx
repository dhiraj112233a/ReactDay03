import React from 'react'

const demoReact = (props) => {
  const demo1 = props.demo;
  return (
   
            <div>
                <h1>Chetan info</h1>
                  <h1>Name : {props.name}</h1>
                  <p>Age : {props.age}</p>
                  
                  {
                    demo1.map((info)=>{
                        return  (
                             <div>
                                <h1>Name : {info.name}</h1>
                                <h1>Age : {info.age}</h1>
                                =============XYZ============
                             </div>
                         )
                    })
                  }
            </div>
  )
}

export default demoReact
