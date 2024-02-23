import React from 'react'
import Mailboite from '../components/Mailboite'
import Header from '../components/Header'
export default function Mails() {
  return (
    <div className=' w-[80%] flex items-center flex-col bg-slate-500'>
        <Header title={"Mail"}/>
        <Mailboite/>
    </div>
  )
}
