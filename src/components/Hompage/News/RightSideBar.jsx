import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div>
            <h3 className="text-xl font-bold mb-4">Login With</h3>
            <div className='flex flex-col gap-3 '>
                <button className='btn border-blue-500 text-blue-500'> <FaGoogle />Login with Google</button>
            <button className='btn border-black text-black'> <FaGithub /> Login with GitHUB</button>
            </div>
        </div>
    );
};

export default RightSideBar;