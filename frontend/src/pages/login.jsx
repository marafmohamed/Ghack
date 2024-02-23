import React, { useState } from 'react';


function Login() {

        const [formData, setFormData] = useState({
          nom: '',
          prenom: '',
          mail: ''
        });
      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // Send formData to server
          console.log('Form data:', formData);
          // Here you can make a fetch request or use any other method to send data to your server
        };
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
            <div className='bg-white rounded-lg shadow my-16 w-[60%] h-[70%] flex flex-col items-center justify-center'>
                <span className='Inter text-4xl font-extrabold'>Se connecter</span>
     <form onSubmit={handleSubmit} className="flex w-[100%] flex-col py-8 items-center space-y-8">
      <div>
        <label htmlFor="nom" className="block mr-[21.5rem] Inter m-[0.1rem] font-medium text-[#344054]">Nom</label>
        <input placeholder='Entrez votre nom' type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} className="border border-gray-300 w-96 h-8 rounded-lg ml-[1rem] px-4 py-2" />
      </div>
      <div>
        <label htmlFor="prenom" className="block mr-[20rem] Inter m-[0.1rem] font-medium text-[#344054] ">Prenom</label>
        <input type="text" placeholder='Entrez votre prenom' id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} className="border border-gray-300 h-8 w-96 rounded-lg ml-[1rem] px-4 py-2" />
      </div>
      <div>
        <label htmlFor="mail" className="block mr-[17.5rem] Inter m-[0.1rem] font-medium text-[#344054]">Adresse mail</label>
        <input placeholder='Entrez votre e-mail' type="email" id="mail" name="mail" value={formData.mail} onChange={handleChange} className="border border-gray-300 w-96 h-8 rounded-lg ml-[1rem] px-4 py-2" />
      </div>
      <button type="submit" className="w-80 bg-black text-white font-bold rounded-lg py-2 px-4 rounded">
      Accéder à mon compte
      </button>
    </form>
          
            </div>
         </div>
        </div>
      );
    }

export default Login;