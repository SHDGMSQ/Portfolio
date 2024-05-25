import React, {ReactElement, useEffect, useRef, useState} from "react";
import style from "./Skill.module.scss";


export const Skill: React.FC<SkillPropsType> = ({title, skillIcon, description}) => {

  const pRef = useRef<HTMLParagraphElement>(null);

  const [isAtTop, setIsAtTop] = useState(true);

  const onScroll = () => {
    const isAtTopNow = pRef.current?.scrollTop === 0;
    setIsAtTop(isAtTopNow);
  };

  useEffect(() => {
    const pElement = pRef.current;
    if (pElement) {
      pElement.addEventListener('scroll', onScroll);
      return () => pElement.removeEventListener('scroll', onScroll);
    }
  }, []);

  return (
    <div className={style.skill}>
      <div className={style.skillHeader}>
        {skillIcon}
        <h4>{title}</h4>
      </div>
      <p className={`${style.description} ${!isAtTop ? style.hideGradient : ''}`} ref={pRef} onScroll={onScroll}>{description}</p>
    </div>
  );
};

//types
type SkillPropsType = {
  title: string
  description: string
  skillIcon: ReactElement
}