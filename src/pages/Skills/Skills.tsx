import React from "react";
import style from "./Skills.module.scss";
import styleContainer from "../../styles/Container.module.css";
import {Skill} from "./skill/Skill";
import {Title} from "../../components/Title/Title";
import {FaAws, FaGithub, FaReact, FaSass} from "react-icons/fa";
import {SiMaterialformkdocs, SiTypescript, SiWebpack} from "react-icons/si";
import {TbApi} from "react-icons/tb";
import {AiOutlineDeploymentUnit} from "react-icons/ai";
import {SkillsIcons} from "../../components/Icons/SkillsIcons/SkillsIcons";


export const Skills = () => {

  //todo дописать описание навыков для restapi, aws, github, webpack

  return (
    <>
      <div className={style.skillsBlock} id="skills">
        <div className={`${styleContainer.container} ${style.skillsContainer}`}>
          <Title title={"My Skills"}/>
          <div className={style.skills}>
            <Skill title={"React/Redux"}
                   description="Creating pure components, functional programming paradigm, flux-architecture, using a state management (Redux, Store), using reducers, action creators, thunks, middleware, children, application optimization with React.Memo, useMemo, React Hooks."
                   skillIcon={
                     <SkillsIcons
                       logoComponent={<FaReact/>}
                     />}
            />
            <Skill title={"JS/TS"}
                   description="Single responsibility principle, SOLID, OOP, prototypes, recursion, Arrays, Objects, inheritance, closures, asynchronous, Promises, classes, interfaces."
                   skillIcon={
                     <SkillsIcons logoComponent={
                       <SiTypescript/>
                     }/>}
            />
            <Skill title={"CSS3(Sass)"}
                   description="Web page styling, creating a responsive layout, using modules, sass nesting, variables, creating mixins, media queries, flex, grid, responsive menu, pseudo elements, import modules with tag 'style', creating animations with libraries or pure css code, transitions, positioning."
                   skillIcon={
                     <SkillsIcons logoComponent={
                       <FaSass/>
                     }/>}
            />
            <Skill title={"Rest API"}
                   description="I have experience integrating client and server applications with RESTful API, including configuring GET, POST, PUT and DELETE requests, experience working with various data formats such as JSON and XML when exchanging data between systems."
                   skillIcon={
                     <SkillsIcons logoComponent={
                       <TbApi/>
                     }/>}
            />
            <Skill title={"Git/Github"}
                   description="I have experience using branching and merging in Git, worked in a team using Git, synchronizing changes through remote repositories and resolving merge conflicts, worked with popular services such as GitHub, GitLab and Bitbucket for hosting and code collaboration."
                   skillIcon={
                     <SkillsIcons logoComponent={
                       <FaGithub/>
                     }/>}
            />
            <Skill title={"Material-UI"}
                   description="Styling class components, styling functional using react hooks, material components, styling with styledComponent, redefining material components, theme for providing default styles for the project with accessibility through the provider."
                   skillIcon={
                     <SkillsIcons logoComponent={
                       <SiMaterialformkdocs/>
                     }/>}
            />
            {/*<Skill title={'Storybook'}
                               description="Use to create a library of components, test components within the current task, develop components in an isolated environment for reuse in any part of the Project, create documentation based on the created components."
                               skillIcon={
                                   <SkillsIcons logoComponent={
                                       <SiStorybook/>
                                   }/>}
                        />*/}
            {/*<Skill title={"Styled Components"}
                   description="Using Styled Components for creating adaptive layout, passed props."
                   skillIcon={
                     <SkillsIcons logoComponent={
                       <SiStyledcomponents/>
                     }/>}
            />*/}
            <Skill title={"Webpack"}
                   description="Used Webpack to optimize the build process, including minimization, transpilation and dependency management, used various loaders and plugins for processing and converting files, such as Babel for JavaScript, SASS for styles and file-loader for resources, implemented code separation to improve application performance, allowing code to be loaded on demand."
                   skillIcon={
                     <SkillsIcons logoComponent={
                       <SiWebpack/>
                     }/>}
            />
            <Skill title={"AWS S3"}
                   description="I have experience in data management using Amazon S3, including uploading, extracting and deleting objects in scalable cloud storage, and have developed web applications using S3 as a storage for static files and media content."
                   skillIcon={
                     <SkillsIcons logoComponent={
                       <FaAws/>
                     }/>}
            />
            <Skill title={"Unit Tests"}
                   description="Creating tests to improve the quality of the code, saving resources and time to find application errors, using the TDD (Test-Driven Development) methodology, creating tests for application reducers in order to check the correct operation of the logic"
                   skillIcon={
                     <SkillsIcons logoComponent={
                       <AiOutlineDeploymentUnit/>
                     }/>}
            />
          </div>
        </div>
      </div>
    </>

  );
};
