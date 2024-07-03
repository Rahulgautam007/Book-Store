import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import list from '../../public/list.json'
import Card from './Card';
import axios from 'axios'

function Books() {
  const[book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
     const res= await axios.get("http://localhost:3002/book")
    //  console.log(res.data.filter((data)=>data.category ==="free"))
     const filterData = res.data.filter((data)=>data.category ==="free");

     setBook(filterData)
      } catch (error) {
        console.log(error)
      }
    }
    getBook()
  },[])
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='max-w-screen-2xl container max-auto md:px-20 px-4'>
        <div>
     <h1 className='text-xl font-semi-bold pb-2'>Free Offered Courses</h1> 
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga assumenda doloribus labore perferendis in amet facilis architecto, sapiente delectus aperiam molestias similique 
     </p>
     </div>
     
      <div>
      <Slider {...settings}>
        {
            book.map((item,id)=>{
                return (      
                    <Card item={item} key={id}/>
                )
            })
        }
       
      </Slider>
      </div>
       </div>
    </>
  )
}

export default Books
