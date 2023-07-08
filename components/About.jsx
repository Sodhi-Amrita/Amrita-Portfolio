import React from 'react'

export const About = () => {
  return (
    <div id='about' className='w-full md:h-screen  flex items-center py-16 pl-[55px] pr-[25px] p-20'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2 font-serif text-justify'>
                <p className='uppercase text-xl tracking-widest '>About</p>
                <h2 className='py-4 text-[#15797a]'>Who I Am</h2>
                <p className='py-2 text-gray-600'> I am a software Developer with 3+ years of academic experience in Full Stack web and Desktop applications. 
                Currently, I am pursuing a Post Graduate Diploma in Information Technology Solutions at Humber College, Canada, 
                and I hold a Bachelor's Degree in Computer Applications. </p>
                <p className='py-2 text-gray-600'>Technically, I am familiar with a range of programming languages and technologies. My expertise includes React,
                     Next.js, HTML5, CSS,Tailwind, JavaScript, jQuery, Node.js,  PHP, XML, Express.js, and Ajax for web development. 
                     I also have database skills with MySQL, Microsoft SQL Server and MongoDb.</p>

                <p className='py-2 text-gray-600'>In addition, I have a strong foundation in data analysis and machine learning. I am proficient in Python and have hands-on experience with libraries such as NumPy and Pandas. 
                    I am comfortable working with machine learning models and implementing data analysis solutions.</p>

                <p className='py-2 text-gray-600'>Furthermore, I have programming skills in C, C++, C#, Java. These languages have equipped me with a solid understanding of fundamental programming concepts and the ability to develop applications in different environments.</p>
               
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="../assets/profile.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About
