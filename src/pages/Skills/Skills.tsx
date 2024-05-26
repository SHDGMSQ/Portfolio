import React from "react";
import style from "./Skills.module.scss";
import styleContainer from "../../styles/Container.module.css";
import {Skill} from "./skill/Skill";
import {Title} from "../../components/Title/Title";
import {FaGithub, FaReact, FaSass, FaAws} from "react-icons/fa";
import {SiMaterialformkdocs, SiStyledcomponents, SiTypescript, SiWebpack } from "react-icons/si";
import {TbApi} from "react-icons/tb";
import {AiOutlineDeploymentUnit} from "react-icons/ai";
import {SkillsIcons} from "../../components/Icons/SkillsIcons/SkillsIcons";


export const Skills = () => {

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
                   description="Requests fetch, axios, JSON, XML, GET, POST, PUT, DELETE, request settings, async/await, promises."
                   skillIcon={
                     <SkillsIcons logoComponent={
                       <TbApi/>
                     }/>}
            />
            <Skill title={"Git/Github"}
                   description="Сollaborative development experience, feature branch workflow principle, resolving conflicts."
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
                   description="Build and optimize the code in the application, configure."
                   skillIcon={
                     <SkillsIcons logoComponent={
                       <SiWebpack/>
                     }/>}
            />
            <Skill title={"AWS S3"}
                   description="Using AWS S3 for storage applications."
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
