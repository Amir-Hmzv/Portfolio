import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

const ProjectItems = ({backgroundImg,projectUrl,title}) => {
    return (
        <div className="flex items-center justify-center relative h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group
        hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
               <Image className=" rounded-xl group-hover:opacity-10 " src={backgroundImg} alt='/' /> 
               <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                   <h3 className="text-2xl tracking-wider text-center text-white">{title}</h3>
                   <h3 className="pb-4 pt-2  tracking-wider text-center text-white">React js</h3>
                   <a href={projectUrl} target='_blank' rel="noreferrer" >
                       <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">View</p> 
                   </a>
               </div>
        </div>
    );
};

export default ProjectItems;