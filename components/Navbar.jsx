import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setshadow] = useState(false);
  const [navBg] = useState('white')
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  
  const handleContactClick = () => {
    localStorage.setItem('pad', '10');
    setNav(false);
  };
  const handleSkillClick = () => {
    localStorage.setItem('skill', '300');
    setNav(false);
  };


  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setshadow(true);
      } else {
        setshadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div style={{backgroundColor: `${navBg}`}}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-white"
          : "fixed w-full h-20 z-[100] bg-white"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl 2xl:px-16">
        <Link href="/">
          <Image
            src="/../public/assets/logo.jpg"
            alt="/"
            width="105"
            height="50"
          />
        </Link>

        <div>
          <ul className="hidden md:flex text-[#15797a]">
            <Link href="/">
              <li className="ml-10 text-sm font-semibold uppercase hover:border-b">
                {" "}
                Home{" "}
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm font-semibold uppercase hover:border-b">
                {" "}
                About{" "}
              </li>
            </Link>
            <Link href="/#skills">
              <li onClick={handleSkillClick} className="ml-10 text-sm font-semibold uppercase hover:border-b">
                {" "}
                Skills{" "}
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm font-semibold uppercase hover:border-b">
                {" "}
                Projects{" "}
              </li>
            </Link>
            <Link href="/#contact">
              <li onClick={handleContactClick} className="ml-10 text-sm font-semibold uppercase  hover:border-b">
                {" "}
                Contact{" "}
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "md:fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                className="rounded-full shadow-lg"
                src="/../public/assets/logo.jpg"
                width="87"
                height="35"
                alt="/"
              />
              <p className="px-0 font-semibold">
                Amrita Sodhi 
              </p>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                {" "}
                Lets built something lengendary together.
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase text-[#15797a] font-semibold">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills">
                <li  onClick={() => setNav(false)} className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#projects">
                <li  onClick={() => setNav(false)} className="py-4 text-sm">Projects</li>
              </Link>

              <Link href="/#contact">
                <li  onClick={handleContactClick} className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="flex flex-col">
              <p className="uppercase tracking-widest font-bold text-[#15797a]">
                {" "}
                Let's Connect{" "}
              </p>

              <div className="flex items-center justify-between my-4 w-full sm:w[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link
                    aria-label="Linkedin Profile"
                    href="https://www.linkedin.com/in/sodhiamrita/"
                  >
                    <FaLinkedinIn />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link
                    aria-label="GitHub Profile"
                    href="https://github.com/Sodhi-Amrita"
                  >
                    <FaGithub />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link
                    aria-label="Gmail"
                    href="mailto:amrita.kaur.sodhi@gmail.com"
                  >
                    <AiOutlineMail />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link
                    aria-label="Instagram Profile"
                    href="https://www.instagram.com/amrita__kaur99/"
                  >
                    <AiOutlineInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
