import React from 'react'

export default function Home(){
  return(
    <div>
      <nav className='flex flex-row bg-blue-500 p-4 space-x-8 justify-center items-center'> 
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" width={"200px"}/>
        <div className='flex flex-row items-center ml-4'>
          <input
             className='w-[400px] bg-gray-200 border border-gray-300 shadow rounded p-2'
             placeholder='Search for Products, Brands and More'
             type='text'
          />
          <button className='bg-blue-500 text-white rounded p-2 ml-2 hover:bg-blue-600 transition duration-200'>Search</button>
        </div>
        <div className='ml-auto flex flex-row'>
          <a href="/Home" className='bg-blue-500 text-white rounded px-4 py-2 m-1 hover:bg-blue-600 transition duration-200'>Home</a>
          <a href="/Support" className='bg-blue-500 text-white rounded px-4 py-2 m-1 hover:bg-blue-600 transition duration-200'>Support</a>
          <a href="/login" className='bg-blue-500 text-white rounded px-4 py-2 m-1 hover:bg-blue-600 transition duration-200' >Login</a>
        </div>
      </nav>
    </div>
  )
}

//hover:bg-blue-600 transition duration-200