import React, { useState } from 'react'

export const AddTodo = (props) => {
    let formstyle={
        width:"80%"
    }
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc)
            alert("Title or Description cannot be blank:");
        else{
            props.addTodo(title,desc);
            settitle("")
            setdesc("")
         }
        }
  return (
            <div className='container my-5' style={formstyle}>
                <h3 className='text-center'>Add Todo List</h3>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                        <input type="text" className="form-control"  value={title} onChange={(e)=>{settitle (e.target.value)}} id="exampleFormControlInput1"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Todo Description</label>
                        <input type="text" className="form-control" value={desc} onChange={(e)=>{setdesc (e.target.value)}} id="exampleFormControlInput1" />
                    </div>
                    <button type="submit" className="btn btn-success my-2 btn-sm  ">Add Todo</button>
                    </form>
            </div>
  )
}
