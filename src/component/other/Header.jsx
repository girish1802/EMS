import React from 'react'

export default function Header() {
  return (
    <>
    <div className="flex items-end justify-between p-10 bg-red-300 ">
        <h1 className='text-2xl font-medium '>Hello <br /> <span className='text-3xl'>Girish 👋</span> </h1>
        <button className='bg-red-600 rounded-xl font-medium p-5'> Log out</button>
    </div>
    </>
  )
}
