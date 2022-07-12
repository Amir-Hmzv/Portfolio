import React from "react";
import Shopping from '../public/assets/new/shop.PNG'
import cryptoImg from '../public/assets/new/crypto.PNG'
import netflixImg from '../public/assets/projects/netflix.jpg'
import ghazachi from '../public/assets/new/ghazachi ui.PNG'
import ProjectItems from "./ProjectItems";
const Projects = () => {
  return (
    <div className="w-full" id="projects">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest text-[#5651e5]">Projects</p>
        <h2 className="py-4">What I`ve Built </h2>
        <div className="grid md:grid-cols-2 gap-8">


    <ProjectItems title='Shopping Cart' backgroundImg={Shopping} projectUrl='https://shopping-cart-with-redux-toolkit-tailwind-css.vercel.app/'/>
    <ProjectItems
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='https://crypto-app-darkmode.vercel.app/'
          />
          <ProjectItems
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='https://my-netflix-seven.vercel.app/'
          />
          <ProjectItems
            title='Ghazachi UI'
            backgroundImg={ghazachi}
            projectUrl='https://restaurant-ghazachi.vercel.app/'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
