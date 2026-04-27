import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiShare2 } from 'react-icons/ci';
import { FaBookmark, FaStar } from 'react-icons/fa';
import { IoEye } from 'react-icons/io5';
import { CgDetailsMore } from "react-icons/cg";

const NewsCard = ({ news }) => {

  // console.log(news)
  return (



    <div className="card bg-base-100 p-3.5 w-full shadow-sm">
      {/* // author 
        //  */}

      <div className='flex justify-between items-center bg-slate-400 p-4 rounded-sm'>
        <div className='flex gap-8 items-center'>
          <Image src={news.author?.img
          } alt={news.author.img} height={40} width={40} className='rounded-full'></Image>

          <div>
            <h2 className='text-2xl font-bold'>{news.author.name}</h2>
            <p className='text-xs'>{news.author.
              published_date
            }</p>
          </div>
        </div>
        <div className='flex gap-2'>
          <FaBookmark className='text-xl' />
          <CiShare2 className='text-xl' />
        </div>

      </div>



      <div className="card-body">
        <h2 className="card-title">{news.title}</h2>
        
      </div>
      <figure>
        <Image
          height={349} width={349} className='w-full'
          src={news.image_url}
          alt="Shoes" />
      </figure>
      <p className='line-clamp-3'>{news.details}</p>
      <div className='flex justify-between items-center mt-4'>
        <div className='flex items-center gap-3'>
   <h2 className='flex gap-3 items-center'> <FaStar className='text-lg text-yellow-500' />
    {news.rating.number}
   </h2> 
   <h1  className='flex gap-3 items-center'> <IoEye className='text-lg  text-blue-500' />{news.total_view} K</h1>
        </div>
        <Link href={`/news/${news._id}`}><button className='btn bg-red-600 text-white '>See Details 
          <CgDetailsMore className='text-2xl' /></button></Link>
      </div>
    </div>
  );
};

export default NewsCard;