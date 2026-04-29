
'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from "react-hook-form"

const RegisterPage = () => {
 const { register,
    handleSubmit,
    watch,
   formState: { errors },} = useForm();  
//    console.log(errors)
// console.log(watch, 'wathchhhhhhhhhhhhh')



    const handleLogin = async (data) => {

      const {name, email, password, link} = data;
 

           
    const {data : authData , error} = await authClient.signUp.email({
       name : name,
       email : email, 
       password : password,
       image: link,
       callbackURL : '/'
      
    })

    if(error){
  alert(error.message)
 }
 if(authData){
  alert('Sign UP Successfully !!!!!!!!!!!!')
 }
      
    console.log(link, password)

    console.log(authData, error, ' this is auth consol')

  // console.log(data)



}

  return (

    <div className="flex min-h-[80vh] items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-188 bg-white p-8 shadow-lg flex flex-col justify-center items-center rounded-sm">
        {/* Header */}
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Login your account
        </h2>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-6 mx-auto">
          {/* Email Field */}
         <fieldset  className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  

  <label  className="label">Name</label>
  <input type="text"
  //  name='email'
  {...register("name" ,{ required: "Name feild is required" })}
    className="input" placeholder="Name" />

    {
    errors.name && (
      <p>{errors.name.message}</p>
    )
   }

  <label  className="label">URL</label>
  <input type="link"
  //  name='email'
  {...register("link" ,{ required: "link feild is required" })}
    className="input" placeholder="Image Link" />

    {
    errors.link && (
      <p>{errors.link.message}</p>
    )
   }
   
  <label  className="label">Email</label>
  <input type="email"
  //  name='email'
  {...register("email" ,{ required: "Email feild is required" })}
    className="input" placeholder="Email" />

    {
    errors.email && (
      <p>{errors.email.message}</p>
    )
   }

  <label className="label">Password</label>
  <input type="password" className="input"
  //  name='password' 
  {...register("password",{ required: "feild is required" })}
   placeholder="Password" />

   {
    errors.password && (
      <p>{errors.password.message}</p>
    )
   }
  <button className="btn btn-neutral mt-4">Register</button>
</fieldset>
        </form>

      </div>
    </div>
  );
};

export default RegisterPage;