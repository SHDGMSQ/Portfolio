import React from "react";
import style from "../Experience.module.scss";
import {ImageComponent} from "../../../components/ImageComponent";

export const JobBlock: React.FC<JobBlockType> = ({logo, company, sumTime, positions}) => {

  return <div className={style.jobBlock}>
    <div className={style.headerJob}>
      <ImageComponent src={logo}/>
      <div className={style.headerJobName}>
        <p className={style.company}>{company}</p>
        <p className={style.sumTime}>{sumTime}</p>
      </div>
    </div>
    <div className={style.jobPositions}>
      {positions.map((position, index) => <Position
        key={index}
        type={position.type}
        tasks={position.tasks}
        workingPosition={position.workingPosition}
        workPositionTime={position.workPositionTime}
        workTime={position.workTime}
      />)}
    </div>
  </div>;
};

const Position: React.FC<PositionType> = ({workingPosition, type, workPositionTime, tasks, workTime}) => {

  return <div className={style.position}>
    <span></span>
    <p className={style.workingPosition}>{workingPosition}</p>
    <p className={style.type}>{type}</p>
    <div className={style.posWorkTimes}>
      <p className={style.workPositionTime}>{workPositionTime}</p>
      <p className={style.workTime}>{workTime}</p>
    </div>
    <p className={style.tasks}>{tasks}</p>
  </div>;
};

//types
type JobBlockType = {
  logo: string
  company: string
  sumTime: string
  positions: Array<PositionType>
}

type PositionType = {
  workingPosition: string,
  type: string,
  workTime: string,
  workPositionTime: string,
  tasks: string,
}

