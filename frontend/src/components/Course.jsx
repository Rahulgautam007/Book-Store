import React, { useEffect, useState } from 'react'
import Card from './Card'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Course() {
  const[book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
     const res= await axios.get("http://localhost:3002/book")
     console.log(res.data)
     setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook()
  },[])
  return (
    <>
    <div className='max-w-screen-2xl container max-auto md:px-20 px-4'>
    <div className='mt-28 items-center justify-center text-center'>
      <h1 className='text-2xl  md:text-4xl'>
        We're delighted to have you <span className='text-pink-500'>Here!:) </span> </h1>
        <p className='mt-12'>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ratione voluptate magnam sequi quis? Expedita consequuntur in
     et recusandae, asperiores dolor suscipit distinctio qui cupiditate commodi est fugiat maiores magnam debitis sint beatae voluptates nemo 
     cum officiis ipsum voluptatibus earum fugit. Quisquam, ducimus officia saepe nesciunt cor
   repudiandae iusto laudantium?
           </p>
<Link to='/'>
<button className='bg-pink-500 text-white mt-6 px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
</Link>
          
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>

    {book.map((item) => {
    return <Card item={item} key={item.id}/>;
})}

    </div>
  
    </div>
    </>
  )
}

export default Course
