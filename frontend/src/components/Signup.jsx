import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const userInfo = {
        fullname: data.fullname,
        email: data.email,
        password: data.password
      };

      const response = await axios.post("http://localhost:3002/user/signup", userInfo);
      if (response.data) {
        toast.success("Signup successful");
        console.log(response.data);
        localStorage.setItem("User", JSON.stringify(response.data.user));
        navigate('/');
      }
    } catch (error) {
      if (error.response) {
        toast.error("Error: " + error.response.data.message);
      } else {
        toast.error("Error: " + error.message);
      }
    }
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-lg">Signup</h3>
            <div className='mt-4 space-y-2'>
              <span>Name</span>
              <br/>
              <input type="text" placeholder='Enter Your Name' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("fullname", { required: true })}/>
              <br/>
              {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br/>
              <input type="email" placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("email", { required: true })}/>
              <br/>
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br/>
              <input type="password" placeholder='Enter Your Password' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("password", { required: true })}/>
              <br/>
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='flex justify-around mt-4'>
              <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-500'>Signup</button>
              <p> Have Account?<Link to="/login" className='underline text-blue-600'>Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
