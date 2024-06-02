import React from "react";
import style from "./Experience.module.scss";
import styleContainer from "../../styles/Container.module.css";
import {Title} from "../../components/Title/Title";
import {ExperienceBlock} from "./ExperienceBlock/ExperienceBlock";
import {JobBlock} from "./JobBlock/JobBlock";
import katek from "../../assets/images/katek_logo.png"
import advin from "../../assets/images/advin_logo.jpg"
import linerock from "../../assets/images/linerock_logo.jpg"

const blockData = [
  {theme: "Projects", interval: 1000, endValue: 10, subTitle: "Successful realized projects."},
  {
    theme: "Years",
    interval: 1000,
    endValue: new Date().getFullYear() - 2021,
    subTitle: "Years commercial work experience."
  },
  {theme: "Features", interval: 1000, endValue: 45, subTitle: "Implemented features."},
];

const jobs = [
  {
    logo: linerock,
    company: "LINEROCK INVESTMENTS",
    sumTime: "6 mo",
    positions: [
      {
        workingPosition: "Frontend developer",
        type: "Remote",
        workPositionTime: "Nov 2023 - Apr 2024",
        workTime: "6 mo",
        tasks: "Work in highly loaded and popular applications photolab and toonme with more than 400 million downloads, react class components, styled components, fix bugs, adaptive layout.",
      },
    ]
  },
  {
    logo: advin,
    company: "ADVIN SMART FACTORY",
    sumTime: "2 yr 1 mo",
    positions: [
      {
        workingPosition: "JavaScript engineer (MEVN)",
        type: "Full-time",
        workPositionTime: "Oct 2022 - Oct 2023",
        workTime: "1 yr 1 mo",
        tasks: "Supporting of existing functional, development of new functionality, integration of third-party services ,CRUD from UI to database (Mongo, SQL).",
      },
      {
        workingPosition: "Frontend developer",
        type: "Full-time",
        workPositionTime: "Nov 2021 - Oct 2022",
        workTime: "1 yr",
        tasks: "Creating of universal components, login forms and universal models ,application architecture organization (UI, BLL, DAL) ,Github collaboration experience.",
      }
    ]
  },
  {
    logo: katek,
    company: "KATEK",
    sumTime: "1 yr",
    positions: [
      {
        workingPosition: "Frontend developer",
        type: "Full-time",
        workPositionTime: "Nov 2020 - Oct 2021",
        workTime: "1 yr",
        tasks: "Creating of universal components, login forms and universal models.",
      }
    ]
  },
];

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
          <h2>Companies list:</h2>
          <div className={style.jobs}>
            {jobs.map((job, index) => <JobBlock
              key={index}
              logo={job.logo}
              company={job.company}
              sumTime={job.sumTime}
              positions={job.positions}
            />)}

          </div>
        </div>
      </div>
    </>
  );
};

//types
