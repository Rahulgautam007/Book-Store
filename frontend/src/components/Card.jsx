import React,{ useContext } from 'react'
import cartcontext from '../Context/cart/cartcontext';

function Card({item}) {
  const { additem } = useContext(cartcontext);
  const handleAddtoCart =(e)=>{
    e.preventDefault();
    additem(item._id);
  }
  return (
   <>
    <div className='mt-4 my-3 p-3 '>
    <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
  <figure>< img src={item.Image}  /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className=" p-3 badge badge-outline">${item.price}</div> 
      <div className="p-3 cursor-pointer badge badge-outline hover:text-white hover:bg-pink-500 duration-200" onClick={handleAddtoCart}>Add Cart</div>
    </div>
  </div>
</div>
      
      </div>
   </>
  )
}

export default Card
