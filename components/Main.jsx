import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

 const Main = () => {
  return (
    <div  id ='home' className='w-full h-screen text-center'>
        <div className='max-w[1240px] w-full h-full mx-auto p-2 pt-[170px] flex justify-center items-center'>
            <div> 
                <br/>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER!</p>
                <h1 className='py-4 text-gray-700'> Hi, I'm <span className='text-[#15797a]'>Amrita Sodhi</span> </h1>  
                <h1 className='py-4 text-gray-700 text-4xl' >
                 A Software Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto text-base font-serif'>
                Highly skilled and dedicated <span className='text-[#309597] text-lg'>software developer</span> with 3 years of academic experience.
                Proficient in Java Core, MySQL, Data Structuresas <span className='text-[#309597] text-lg'>Full Stack Developer </span>using React, Next.js,
                Node.js, MongoDB, Tailwind, RESTful APIs, PHP, AJAX, JQuery, and many more technologies, frameworks, and tools. 
                Strong problem-solving abilities and attention to detail.
                Experienced in developing web and mobile applications, backend systems, and APIs.
                Excellent understanding of software development methodologies, including agile practices.
                Passionate about delivering innovative solutions and exceptional user experiences. 
                A valuable asset for any team or project.
                </p>

                

                <button className='p-4 '>
                <a  href='/' target='_blank'>
                  Download Resume
                </a>
                </button>
                <br/> <br/>

                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                        
                        <Link aria-label='Linkedin Profile' target='_blank'  href="https://www.linkedin.com/in/sodhiamrita/">
                        <FaLinkedinIn/>
                        </Link>
                    </div>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Link aria-label='GitHub Profile'  href="https://github.com/Sodhi-Amrita">
                        <FaGithub/>
                      </Link>  
                    </div>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Link aria-label='Gmail'  href="mailto:amrita.kaur.sodhi@gmail.com">
                    <AiOutlineMail/>
                    </Link>
                    
                    </div>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                        
                        <Link aria-label='Instagram Profile'  href="https://www.instagram.com/amrita__kaur99/">
                        <AiOutlineInstagram/>
                        </Link>
                    
                    </div>

                   

                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;