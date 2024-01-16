import React from 'react'

const page : React.FC = () => {
  return (
    <div className=' min-h-screen flex-col flex justify-center items-center'>
              <h1 className=' text-4xl mb-8 font-semibold'>Hello 👋</h1>
             <form action="" className=' w-1/4 flex flex-col gap-3'>
                <input className=' rounded-md border px-4 py-2' type="text" placeholder='john@gmail.com' />
                <input className='border rounded-md px-4 py-2' type="password" placeholder='John@123...Enter Strong Password' />
                <button className='  bg-green-300 py-3 rounded-md  hover:bg-green-400 transition-all'>Register</button>
             </form>

    </div>
  )
}

export default page