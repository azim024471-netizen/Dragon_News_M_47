'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form"

const LoginPage = () => {

 const { register,
    handleSubmit,
    watch,
   formState: { errors },} = useForm();
  
  //  console.log(errors)
 
    const handelLogin = async(data) => {


    // e.preventDefault();

    // basic way //////////////////////////////////////

    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // console.log(email, password)

          // way 22222222////////////////////////////////////

  // const formData = new FormData(e.currentTarget);
  // const userData = Object.fromEntries(formData.entries());

  // console.log(userData)


  // way 3 by using use hook from React 

  console.log(data)

  const {data : authData, error} = await authClient.signIn.email({
    email : data.email,
    password : data.password,
    rememberMe: true,
    callbackURL : '/'
  })
  
  console.log('data is here', authData, error)

 if(error){
  alert(error.message)
 }
 if(authData){
  alert('Sign UP Successfully !!!!!!!!!!!!')
 }


}

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-188 bg-white p-8 shadow-lg flex flex-col justify-center items-center rounded-sm">
        {/* Header */}
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Login your account
        </h2>




        <form onSubmit={handleSubmit(handelLogin)} className="space-y-6 mx-auto">
          {/* Email Field */}
         <fieldset  className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Login</legend>


  <label  className="label">Email</label>
  <input type="email"
  //  name='email'
  {...register("email" ,{ required: "Email feild is required" })}
    className="input" placeholder="Email" />

    {
    errors.email && (
      <p className='text-red-600'>{errors.email.message}</p>
    )
   }


  <label className="label">Password</label>
  <input type="password" className="input"
  //  name='password' 
  {...register("password",{ required: "feild is required" })}
   placeholder="Password" />

   {
    errors.password && (
      <p className='text-red-600'>{errors.password.message}</p>
    )
   }


  <button className="btn btn-neutral mt-4">Login</button>
</fieldset>
        </form>



        {/* Footer Link */}
        <div className="mt-8 items-center justify-center text-sm gap-3.5 flex font-medium text-gray-600">
          <p>Dont't Have An Account ?</p>

          {/* <a href="#" className="text-red-500 hover:underline"></a> */}


        <Link  href={'/register'} className="text-red-500  hover:underline"> 
        Register
        </Link>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;