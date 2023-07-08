import React from "react";
import Image from "next/image";
import Node from "../public/assets/Projects/Node.png"
import shopLenses from "../public/assets/Projects/ShopLenses.png"
import tasklist from "../public/assets/Projects/tasklist.jpg"
import EzRecipe from "../public/assets/Projects/EzRecipe.png"
import high_school from "../public/assets/Projects/High-school.jpg"
import heart_attack from "../public/assets/Projects/Heart-Attack.jpg"

import Link from "next/link";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <div id="projects" className="w-full pl-[55px] pr-[25px] p-20">
      <div className="max-w-[1240px] mx-auto px-2 py-16 font-serif">
        <p className="text-xl tracking-widest uppercase">Projects</p>
        <h2 className="py-4 text-[#15797a]">What I've Built</h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          <ProjectItems title="NodeJS App"
          img={Node} url="https://silly-teal-elk.cyclic.app/api/profile/Step3data"
          description="Nodejs, Express, MongoDB"
          />

          <ProjectItems title="ShopLenses"
          img={shopLenses} url="https://github.com/Sodhi-Amrita/PHP-MYSQL-ProductReviewSystem"
          description="HTML, CSS, PHP, MSql"
          />
          <ProjectItems title="TaskList App"
          img={tasklist} url="https://github.com/Sodhi-Amrita/TaskList-App"
          description="React, Typescript"
          />
          <ProjectItems title="EzRezipe"
          img={EzRecipe} url="https://github.com/Sodhi-Amrita/Ez-Recipe"
          description="IOS Mobile App, Swift, Figma, Core Data"
          />

          <ProjectItems title="High School Prediction Model"
          img={high_school} url="https://github.com/Sodhi-Amrita/HighSchool-Prediction-BigData"
          description="Machine Learning Models, Python, Numpy, Pandas, Mtplotlib, SciKit-Learn "
          />
       

          <ProjectItems title="Heart Attack Prediction"
          img={heart_attack} url="https://github.com/Sodhi-Amrita/HeartAttack-Prediction"
          description="R studio, GGPlot, DPLYR "
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
