import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../Context/AuthProvider';

function Login() {
  const[AuthUser,setAuthUser]=useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (data) => {
    const userInfo ={
      
      email:data.email,
      password:data.password
    }
   await axios.post("http://localhost:3002/user/login",userInfo)
    .then((res)=>{
      // console.log(res.data.user)
      if(res.data){
        toast.success("Login succesfull")
        document.getElementById("my_modal_3").close()
        window.location.reload()
      }
      console.log(res.data.user,"Login.jsx")
      localStorage.setItem("Users", JSON.stringify(res.data.user));
      

    }).catch((err)=>{
      if(err.response){
       
        toast.error("Errro",err.response.data.message)
      
      }
    })
  };
  
  return (
    <div>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form   method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=>document.getElementById("my_modal_3").close()}>✕</Link>
    
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type="email" placeholder='Enter Your Email'  className='w-80 px-3 py-1 border rounded-md
        outline-none' {...register("email", { required: true })}/>
        <br></br>
          {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* Password Field */}
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br/>
        <input type="password" placeholder='Enter Your Password'  className='w-80 px-3 py-1 border rounded-md
        outline-none' {...register("password", { required: true })}/>
        <br/>
          {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    
    {/* Button  */}
   <div className='flex justify-around mt-4'>
   <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-500'>Login</button>
   
   <p> Not Registered?<Link to='/signup' className='underline text-blue-600'>Signup</Link>{''}</p>
   </div>
   </form>
  </div>
  
</dialog>
    </div>
  )
}

export default Login
