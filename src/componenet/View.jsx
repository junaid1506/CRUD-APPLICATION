import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import photo from '/src/images/17290016279638lrudvvh.png'


function View() {

    const [view,setView]=useState([])
    const {id}= useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3000/data/${id}`)
        .then(res=>{
            setView(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])



  return (
    <>
    <div className="viewcard" key={view.id}>
        <div className="img">
        <img src={photo} alt="hii" />
        </div>
        <div className="detail">
        <h3>{view.name}</h3>
        <h3>{view.email}</h3>
        </div>
    </div>
    </>
  )
}

export default View