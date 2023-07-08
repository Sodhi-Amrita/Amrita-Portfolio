import React, { useEffect, useState } from "react";
import Image from "next/image";
import html from "../public/assets/skills/Html.png";
import Css from "../public/assets/skills/CSS.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Javascript from "../public/assets/skills/javascript.png";
import node from "../public/assets/skills/node.png";
import mongo from "../public/assets/skills/mongo.png";
import react from "../public/assets/skills/react.png";
import github from "../public/assets/skills/github1.png";
import nextjs from "../public/assets/skills/nextjs.png";
import php from "../public/assets/skills/php.png";
import mysql from "../public/assets/skills/mysql.png";
import ml from "../public/assets/skills/machine_learning.jpg";
import angular from "../public/assets/skills/angular.png";
import tableau from "../public/assets/skills/tableau.png";
import java from "../public/assets/skills/java.png";
import express from "../public/assets/skills/express.png";
import typescript from "../public/assets/skills/ts.png";
import hadoop from "../public/assets/skills/hadoop.png";
import hive from "../public/assets/skills/hive.png";
import spark from "../public/assets/skills/spark.png";
import python from "../public/assets/skills/python.png";
import sql_server from "../public/assets/skills/sql.png";
import jquery from "../public/assets/skills/jquery.png";
import firebase from "../public/assets/skills/firebase.png";
import figma from "../public/assets/skills/figma.png";

import { Html } from "next/document";

const Skills = () => {
  const [pad,setPad] = useState(0);
  useEffect(() => {
    const pad = localStorage.getItem('skill');
    
      setPad(parseInt(pad));
    
    
    console.log(pad)
    const handleBeforeUnload = () => {
      localStorage.removeItem('skill');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  });
  return (
    <div id="skills" className={`w-full lg:h-screen pl-[55px] pr-[25px] p-40 pt-[${pad}px]`}>
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full font-serif">
        <p className="text-xl tracking-widest uppercase ">Skills</p>
        <h2 className="py-4 text-[#15797a]"> What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={html} width="64px" height="64px" alt="/"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Html</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} width="64px" height="64px" alt="/"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Css</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Tailwind}
                  width="64px"
                  height="64px"
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={figma} width="64px" height="64px" alt="/"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Figma</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={php} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>PHP</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Javascript}
                  width="64px"
                  height="64px"
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={typescript}
                  width="64px"
                  height="64px"
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Typescript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={mongo} width="64px" height="64px" alt="/"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Mongo DB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={express} width="64px" height="64px" alt="/"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Express</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={react} width="64px" height="64px" alt="/"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={node} width="64px" height="64px" alt="/"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={nextjs} width="64px" height="64px" alt="/"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next Js</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={angular} width="64px" height="64px" alt="/"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Angular</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={java} width="64px" height="64px" alt="/"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Java</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={python} width="64px" height="64px" alt="/"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ml} width="64px" height="64px" alt="/"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Machine Learning</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={jquery} width="64px" height="64px" alt="/"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JQuery</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={mysql} width="64px" height="64px" alt="/"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MySql</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={sql_server}
                  width="64px"
                  height="64px"
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Microsoft SQL Server</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={tableau} width="64px" height="64px" alt="/"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tableau</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={hadoop} width="64px" height="64px" alt="/"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Hadoop</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={spark} width="64px" height="64px" alt="/"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Spark</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={hive} width="64px" height="64px" alt="/"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Hive</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={github} width="64px" height="64px" alt="/"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
