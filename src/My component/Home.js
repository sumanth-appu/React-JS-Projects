import React from 'react'

export const Home = () => {
    let Mystyle ={
        width:"100%",
        height:"30vh",
        margin:"75px"
    }
  return (
    <div className='container text-center ' style={Mystyle}>
       <h1>
        Home Page 
        </h1> 
        <p>
        Add events of the day
        </p>
   </div>
  )
}
