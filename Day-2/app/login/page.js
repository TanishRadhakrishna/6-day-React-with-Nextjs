"use client";
import React from 'react';
import {useState} from 'react';
import { useRouter } from 'next/navigation';
export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='flex flex-col min-h-screen w-full bg-blue-500 justify-center items-center'>
            <div className='flex flex-col bg-white w-[500px] h-[700px] shadow-lg rounded-lg flex flex-col items-center'>
                <img 
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" 
                    className="bg-blue-300"
                />
                <h1 className='text-3xl font-bold text-gray-700 mt-4'>Login</h1>
                <div className='text-gray-500 text-sm mt-2'>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    alert("email: "+email+" password: "+password, router.push('http://localhost:3000/'))}
                    }>
                    <input 
                        onChange={(event)=>{
                            setEmail(event.target.value)
                        }}
                        type='email' 
                        placeholder='Email' 
                        className='border border-gray-300 rounded-lg p-4'
                    />
                    <input 
                        onChange={(event)=>{
                            setPassword(event.target.value)
                        }}
                        id='password' 
                        placeholder='Password' 
                        className='border border-gray-300 rounded-lg p-4'
                    />
                    <button 
                        type='submit' 
                        className='bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
        </div>
    )
}