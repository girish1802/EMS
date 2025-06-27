import React from 'react'

export default function TasklistNumber() {
  return (
    <>
    <div className='flex  justify-between gap-5 p-4 '>
        <div className='w-screen bg-red-600 rounded-xl py-5 px-10'>
          <h2 className='text-3xl font-semibold'>0</h2>
          <h3 className='font-medium text-xl'>New Task</h3>
        </div>
           <div className='w-screen bg-blue-600 rounded-xl py-5 px-10'>
          <h2 className='text-3xl font-semibold'>0</h2>
          <h3 className='font-medium text-xl'>New Task</h3>
        </div>
           <div className='w-screen bg-emerald-600 rounded-xl py-5 px-10'>
          <h2 className='text-3xl font-semibold'>0</h2>
          <h3 className='font-medium text-xl'>New Task</h3>
        </div>
           <div className='w-screen bg-yellow-600 rounded-xl py-5 px-10'>
          <h2 className='text-3xl font-semibold'>0</h2>
          <h3 className='font-medium text-xl'>New Task</h3>
        </div>
        


    </div>
    </>
  )
}
