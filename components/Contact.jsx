import React from 'react'
import { useRouter } from 'next/router';
import { AiOutlineMail,AiOutlineInstagram } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';




    
const Contact = () => {
 
    const form = useRef();
    const [pad,setPad] = useState(0);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [isPending, setIsPending] = useState(false);
    useEffect(() => {
      const pad = localStorage.getItem('pad');
      
        setPad(parseInt(pad));
      
      
      console.log(pad)
      const handleBeforeUnload = () => {
        localStorage.removeItem('pad');
      };
  
      window.addEventListener('beforeunload', handleBeforeUnload);
  
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    });
  
    
  function validateForm() {
    const newErrors = {};
    const name = form.current.name.value.trim();
    const phoneNumber = form.current.number.value.trim();
    const email = form.current.email.value.trim();
    const subject = form.current.subject.value.trim();
    const message = form.current.message.value.trim();


   
    if (name === '') {
      newErrors.name = 'Name is required';
    }

    if (phoneNumber.length >= 0 && phoneNumber.length !== 10 ) 
    {
      newErrors.phoneNumber = 'Phone Number is invalid.';
    }
  
    if (email === '') {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (subject === '') {
      newErrors.subject = 'Subject is required';
    }

    if (message === '') {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }


    function sendEmail(e){
      e.preventDefault();
  
      if (validateForm()) {
        emailjs.sendForm('service_tympyaa', 'template_mwfpie9', form.current, 'bVurFEjs-aISrrSHK')
          .then((result) => {
            console.log(result.text);
            setIsPending(false);
            setSuccess(true)
          }, (error) => {
            console.log(error.text);
          });
         // changeSuccess()
  
        form.current.reset();
       
      }
    };
   
  return (
    <div id='contact' className={`w-full lg:h-screen pl-[99px] pr-[25px] -m-10 p-${pad}`}>
        <div className='max-w[1240px] m-auto px-2 py-16 w-full'>
 
            <p className='uppercase text-xl tracking-widest col-span-2 font-serif '>Contact</p>
            <h2 className='py-4 font-serif text-[#15797a]' >
                Get In Touch </h2>
            <div className='grid lg:grid-cols-5 gap-8'>
{/* Left */}
   <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 font-serif'>
    <div className='lg:p-4 h-full'>
        <div>
            <img className='rounded-xl hover:scale-105' src="../assets/contact.jpg" alt="Contact" /> 
        </div>
        <div>
            <h2 className='py-2'>Amrita Sodhi</h2>
            <p className='font-bold text-[#15797a]'>Software Developer</p>
            <p className='py-4 font-semibold'>I am available for full-time and part-time positions or freelance. Contact me and let's talk. </p>
            <p className='font-semibold'>amrita.kaur.sodhi@gmail.com </p>
            <p className='font-semibold'>+1(647) 978-8447</p>
        </div>
        <div className='uppercase pt-8'>
        <p className='font-bold underline'>Connect with me</p>
        <div className='flex items-center justify-between py-4 '>
        <div className='flex items-center justify-between max-w-[330px] mx-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mx-1 ' >
                        <Link aria-label='Linkedin Profile'  href="https://www.linkedin.com/in/sodhiamrita/">
                        <FaLinkedinIn/>
                        </Link>
                    </div>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mx-1'>
                    <Link aria-label='GitHub Profile'  href="https://github.com/Sodhi-Amrita">
                        <FaGithub/>
                      </Link>  
                    </div>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mx-1'>
                    <Link aria-label='Gmail'  href="mailto:amrita.kaur.sodhi@gmail.com">
                    <AiOutlineMail/>
                    </Link>
                    </div>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mx-1'>
                    <Link aria-label='Instagram Profile'  href="https://www.instagram.com/amrita__kaur99/">
                        <AiOutlineInstagram/>
                        </Link>
                    </div>


        </div>
    </div>

    </div>
   
   </div>

            </div>

            {/* Right*/}
            <div className='col-span-3  w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                            <label htmlFor='firstname' className='uppercase text-sm py-2'>Name</label>
                            <input id='firstname' className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="name" />
                            {errors.name && <span className="text-red-500">{errors.name}</span>}
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor='phonenumber' className='uppercase text-sm py-2'>Phone Number</label>
                            <input id='phonenumber' className='border-2 rounded-lg p-3 flex border-gray-300' type="number" name="number" 
                            />
                            {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber}</span>}
                        </div>

                    </div>
                    <div className='flex flex-col py-2'>
                        <div className='flex flex-col'>
                            <label htmlFor='email' className='uppercase text-sm py-2'>Email</label>
                            <input id='email' className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name="email"/>
                            {errors.email && <span className="text-red-500">{errors.email}</span>}
                        </div>
                    </div>
                    <div className='flex flex-col py-2'>
                        <div className='flex flex-col'>
                            <label htmlFor='subject' className='uppercase text-sm py-2'>Subject</label>
                            <input id='subject' className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="subject" />
                            {errors.subject && <span className="text-red-500">{errors.subject}</span>}
                        </div>
                    </div>
                    <div className='flex flex-col py-2'>
                        <div className='flex flex-col'>
                            <label htmlFor='message' className='uppercase text-sm py-2'>Message</label>
                            <textarea id='message' className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' name="message"></textarea>
                            {errors.message && <span className="text-red-500">{errors.message}</span>}
                        </div>
                    </div>
                    {!isPending && <button className='w-full p-4 text-gray-100 mt-4' name='btn'>Send Message</button>}
                    {isPending && <button className='w-full p-4 text-gray-100 mt-4' name='btn' disabled>Sending Message</button>}
                    <br/>
                    <br/>
                    {success && <p className="text-green-700">Form submitted successfully.</p>}
                   
                </form>

            </div>
        </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href="/#home" scroll={false}>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in-duration'>
                    <HiOutlineChevronDoubleUp className='text-[#15797a]' size={30}/>
                </div>
                </Link>
            </div>
        </div>
    </div>

            /* <div className='col-span-3 w-full h-auto shadow-gray-400 rounded-xl lg:p-4'>

                <div className='p-4'>
            <form>
                
            </form>

                </div>

            </div>



        </div>

    </div>
    </div> */
  )
}

export default Contact