import React from "react";
import ProjectItem from "./ProjectItem";
import propertyImg from "../public/assets/projects/property.png";
import weddingImg from "../public/assets/projects/wedding.png"
import quoteImg from "../public/assets/projects/quote.png"
import triviaImg from "../public/assets/projects/Trivia.png"

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] ex-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-2">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Professional Website"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Wedding Website"
            backgroundImg={weddingImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Professional Website"
            backgroundImg={quoteImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Professional Website"
            backgroundImg={triviaImg}
            projectUrl="/property"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
