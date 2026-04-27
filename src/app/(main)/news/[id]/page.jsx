import { getNewsDetailsById } from '@/lib/data';
import { ArrowRight } from '@gravity-ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiShare2 } from 'react-icons/ci';
import { FaBookmark, FaStar } from 'react-icons/fa';
import { IoEye } from 'react-icons/io5';

 export const  generateMetadata = async({params})=>{


     const {id} = await params;
    console.log(id, 'paramssssss')

    const news = await getNewsDetailsById(id);

    return {
        title : news.title,
        description : news.details
    }

 }



const NewsDetails =async ({params}) => {
    const simething = await params;
    const {id} =simething;
    // console.log(simething, 'this is params' , 'thi is  idddddddddddddddd',id)
     
    const news = await getNewsDetailsById(id)
    console.log(news, ' news is    hear')

    return (
         <div className="card bg-base-100 p-3.5 max-w-4xl mx-auto shadow-sm">
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
              <p className=''>{news.details}</p>
              <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center gap-3'>
           <h2 className='flex gap-3 items-center'> <FaStar className='text-lg text-yellow-500' />
            {news.rating.number}
           </h2> 
           <h1  className='flex gap-3 items-center'> <IoEye className='text-lg  text-blue-500' />{news.total_view} K</h1>
                </div>
                <Link href={`/category/${news.category_id}`}><button className='btn bg-red-600 flex items-center text-white'>See Other News On This Category <ArrowRight className='text-white' /></button></Link>
              </div>
            </div>
    );
};

export default NewsDetails;