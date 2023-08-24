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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus delectus quia animi suscipit 
        laudantium sequi laboriosam, voluptas consequuntur voluptatum eius non sint pariatur nisi provident 
        sit quis debitis, impedit iste.
        </p>
   </div>
  )
}
