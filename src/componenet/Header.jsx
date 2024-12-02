import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Header() {

    const [cards,setCards]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/data')
        .then(res=>{
            setCards(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[cards])

    const list = cards.map(card=> <div className='card' key={card.id}>
        <h3>NAME :- {card.name} </h3>
        <h3>EMAIL :- {card.email}</h3>
        <div className='row3'>
        <Link to={'/view/'+card.id}>View</Link>
        <Link to={'/edit/'+card.id}>Edit</Link>
        <Link className='delete' to={'/delete/'+card.id}>Delete</Link>
        </div>
    </div>)



  return (
  
    <>
   
    <div className='row'>
    {list}
    </div>


    

    
   

    </>
  )
}

export default Header