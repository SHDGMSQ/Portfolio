import React from "react";
import {Project, ProjectPropsType} from "./Project/Project";
import style from "./Projects.module.scss";
import styleContainer from "../../styles/Container.module.css";
import {Title} from "../../components/Title/Title";
import photolabIcon from "../../assets/images/photolab.jpg";
import toonMeIcon from "../../assets/images/toonme.jpg";
import nppIcon from "../../assets/images/npp.jpg";

const projects: Array<ProjectPropsType> = [
  {
    projectName: "Photolab",
    description: "This is your laboratory of creativity in every picture. With the help of advanced AI technologies and over 800 effects, filters and face montages, Photo Lab transforms ordinary photos into exciting works of art. Create unique combinations of effects and share them with the world. Explore a variety of styles from realistic to artistically stylized images using the DreamLook feature, or try on different professions and national images with LookLab. All this is possible with just one photo! Discover a new level of storytelling with InstaMotion, which allows you to change faces in videos. PhotoLab is not just a photo editor, it is a place where your creativity comes to life.",
    imageSrc: photolabIcon,
    linkDemo: "https://photolab.me"
  },
  {
    projectName: "ToonMe",
    description: "To on Me is your personal cartoonist. Transform your photos into unique artistic masterpieces with innovative filters and styles. Discover over 150 art styles and create portraits in just a few touches.",
    imageSrc: toonMeIcon,
    linkDemo: "https://toonme.com",
  },
  {
    projectName: "NewProfilePic",
    description: "Create a stylish and memorable avatar using AI. This self-learning neural network portrait editor generates amazing avatars that are perfect for your social media profile. Use trendy filters and effects to stand out and impress your friends.",
    imageSrc: nppIcon,
    linkDemo: "https://newprofilepic.com/"
  },
];

export const Projects = () => {


  return (
    <>
      <div className={style.projectsBlock} id="projects">
        <div className={`${styleContainer.container} ${style.projectsContainer}`}>
          <Title title={"My Projects"}/>
          <div className={style.projects}>
            {projects.map((project, i) => (
              <Project
                key={i}
                projectName={project.projectName}
                description={project.description}
                imageSrc={project.imageSrc}
                linkDemo={project.linkDemo}
                linkCode={project.linkCode ? project.linkCode: ""}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
