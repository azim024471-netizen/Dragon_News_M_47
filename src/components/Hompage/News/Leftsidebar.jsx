import Link from 'next/link';
import React from 'react';

const Leftsidebar = ({categories, activId}) => {

    // console.log(categories)

    return (
        <div className=" col-span-3"> <h3 className="text-xl font-bold mb-3">All Category</h3> 

        <ul className="flex flex-col gap-3.5">

         {
          categories.map(category => <li className={` ${activId === category.category_id && 'bg-slate-200'} rounded-md text-center 
            font-bold text-md  `} key={category.category_id}>
                <Link className='block p-4' href={`/category/${category.category_id}`}>{category.category_name}</Link>
                </li>)
        }

        </ul>


        
        
        </div>
    );
};

export default Leftsidebar;