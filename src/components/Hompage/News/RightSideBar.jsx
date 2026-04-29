'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    // for google sign in ///////////////////////////////////
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        // console.log(data, 'this is dataaaaaaaaaaaaaaaaa')
    }


    // for github sign in ///////////////////////////////////
    const handleGithubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
        console.log(data, 'this is dataaaaaaaaaaaaaaaaa')
    }



    return (
        <div>
            <h3 className="text-xl font-bold mb-4">Login With</h3>
            <div className='flex flex-col gap-3 '>

                <button onClick={handleGoogleSignIn} className='btn border-blue-500 text-blue-500'>
                    <FaGoogle />Login with Google
                </button>

                <button onClick={handleGithubSignIn} className='btn border-black text-black'>
                    <FaGithub /> Login with GitHUB
                </button>

            </div>
        </div>
    );
};

export default RightSideBar;