import React from "react";
import style from "./Experience.module.scss";
import styleContainer from "../../styles/Container.module.css";
import {Title} from "../../components/Title/Title";
import {ExperienceBlock} from "./ExperienceBlock/ExperienceBlock";

const blockData = [
  {theme: "Projects", interval: 1000, endValue: 10, subTitle: "Successful realized projects."},
  {theme: "Years", interval: 1000, endValue: new Date().getFullYear() - 2021, subTitle: "Years commercial work experience."},
  {theme: "Features", interval: 1000, endValue: 45, subTitle: "Implemented features."},
]

export const Experience = () => {

  return (
    <>
      <div className={style.experience}>
        <div className={`${styleContainer.container} ${style.experienceContainer}`}>
          <Title title="Experience"/>
          <div className={style.inner}>
            {blockData.map((block, index) => <ExperienceBlock
                key={index}
                theme={block.theme}
                interval={block.interval}
                endValue={block.endValue}
                subTitle={block.subTitle}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

//types
