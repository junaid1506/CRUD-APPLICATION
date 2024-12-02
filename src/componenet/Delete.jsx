import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Delete() {
    const [dlt,setDlt]=useState([])
    const {id}= useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3000/data/${id}`)
        .then(res=>{
            setDlt(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    const deleteHandler = ()=>{
        axios.delete(`http://localhost:3000/data/${id}`,dlt)
        nav('/')
    }
    const nav = useNavigate()
  return (
    <>
     <div className='form3'>
                <h3>{dlt.name}</h3>
                <h3>{dlt.email}</h3>
                <h5>are you sure you want to delete ??</h5>
                <button onClick={deleteHandler}>Delete</button>
            </div>
    </>
  )
}

export default Delete