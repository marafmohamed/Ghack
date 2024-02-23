import React, { useEffect } from "react";

export default function Mailboite() {

    useEffect(()=>{
        const getAllmails= ()=>{
            
        }
    },[])
  return (
    <div className=" w-full h-[85%] flex flex-col py-6 items-center bg-[#F0F0F0]  rounded-t-[30px] ">
      <ul className="flex  gap-40 items-center font-semibold px-2 border-b-2 border-b-[#ffff] w-[85%]  h-20 ">
        <li>Nom</li>
        <li>Objet</li>
        <li>Date</li>
        <li>Priorité</li>
        <li>Status</li>
      </ul>
      <ul className="flex flex-col justify-center items-center gap-4 w-[85%] ">
        <li className=" w-full flex gap-40 py-4 bg-[#D9D9D9]/[59%] px-2">
            <p>Name</p>
            <p>objet</p>
            <p>Date</p>
            <p>Priority</p>
            <p>Status</p>
        </li>
        
      </ul>
    </div>
  );
}
