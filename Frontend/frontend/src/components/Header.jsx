import React from 'react'

export default function Header({title = 'Mails'}) {
  return (
    <div className=' w-full flex items-center justify-between px-10 bg-white h-[15%]'>
        <h1 className='text-3xl  font-medium'>{title}</h1>
        <div className='flex justify-start items-center gap-3 h-[50%] w-[20%] rounded-full border  border-[#292D32]/[44%] py-3' >
            <img src="" alt="profile" />
            <div className='flex flex-col justify-around items-center gap-2'>
                <h3>Name</h3>
                <h4 className=' text-[#292D32]/[44%] text-sm'>role</h4>
            </div>
        </div>
    </div>
  )
}
