
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {

    const [edit,setEdit]=useState([])
    const {id}= useParams()
     useEffect(()=>{
         axios.get(`http://localhost:3000/data/${id}`)
         .then(res=>{
             setEdit(res.data)
         })
         .catch(err=>{
             console.log(err)
         })
     },[])
   const  setHandler = ()=>{
        axios.put(`http://localhost:3000/data/${id}`,edit)
        nav('/')
     }
     const nav = useNavigate()
  return (
 <>
 <div >
    <form onSubmit={setHandler} className='form2'>
                <input type="text" value={edit.name}
                onChange={e=>{
                    setEdit({
                        ...edit,name:e.target.value
                    })
                }}
                
             />
                <input type="text" value={edit.email}
                 onChange={e=>{
                    setEdit({
                        ...edit,email:e.target.value
                    })
                }}
                />
                <button>Update</button>
                </form>
            </div>

           
 </>
  )
}

export default Edit