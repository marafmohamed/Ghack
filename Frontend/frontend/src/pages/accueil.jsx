import React from 'react';


function Accueil() {
  return (
    <div className='h-[100vh]'>
     <div className='flex justify-between my-4 mx-10 h-[4vh]'>
     <div>
        <span className='Inter font-black text-3xl text-[#E65F2B]'>
            INBOXERA
        </span>

     </div>
     <div>
       <span className='Inter font-regular text-[#E65F2B]'>Help</span>
     </div>
     </div>

     <div className='bg-gray-200 h-[91.5vh] flex justify-center items-center'>
        <div className='bg-white rounded-lg shadow my-16 w-[80%] h-[70%] flex flex-col items-center justify-center'>
        <img src='inboxera.png' alt='logo' className='h-40 ml-10'></img>
        <div className='mb-8'>
        <div className='px-6 py-2'>
<p className='Inter font-semibold text-xl'>Experience a new era in communication management with</p>
<span className='inter font-extrabold text-[#E65F2B] text-xl'>INBOXERA</span>
</div>
<p className='Inter font-semibold text-xl'> Where simplicity meets efficiency, transforming how you handle external interactions effortlessly</p>
</div>
<div className='flex gap-32 p-6 items-center'>
    <button className='bg-black text-white p-3 rounded Inter text-l font-bold'>Administrateur</button>
    <button className='bg-black text-white p-3 rounded Inter font-bold text-l'>Employé</button>
</div>
        </div>
     </div>
    </div>
  );
}

export default Accueil;