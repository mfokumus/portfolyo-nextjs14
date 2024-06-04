"use client"

import Image from "next/image";
import React, { useState, useTransition } from "react";
import Tabbuton from "./Tabbuton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>NextJS</li>
        <li>Typescript</li>
        <li>Node.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Mugla Sitki Kocman University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
        <li>Cisco</li>
      </ul>
    ),
  },
];

const About = () => {

    const [tab, setTab] = useState("skills")

    const [isPending, startTransition] = useTransition()


    const handleChange=(id:any)=>{
        startTransition(() => setTab(id))
    }


  return (
    <div className="text-white" id="about">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center
        py-8 px-4">

          <Image alt="" src="/2.png" width={500} height={500}/>
          
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">

            <p className="text-base lg:text-lg">
              I am full stack developer Lorem ipsum dolor sit amet 
              consectetur adipisicing elit. Eligendi, quis ipsam ad 
              tempora officia veniam? Ab vitae asperiores ipsa tempora.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Vel dicta, nobis error reprehenderit repudiandae sit?
            </p>

            <div className="flex flex-row justify-start mt-8">

              <Tabbuton 
              selectTab={() => handleChange("skills")}
              active={tab==="skills"}>
                Skills
              </Tabbuton>

              <Tabbuton 
              selectTab={() => handleChange("education")}
              active={tab==="education"}>
                Education
              </Tabbuton>

              <Tabbuton 
              selectTab={() => handleChange("certifications")}
              active={tab==="certifications"}>
                Certifications
              </Tabbuton>

            </div>

            <div className="mt-8">
                {TAB_DATA.find((t)=>t.id === tab)?.content}
            </div>


          </div>



        </div>
    </div>
  );
};

export default About;
