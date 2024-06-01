import React, {useEffect, useRef, useState} from "react";
import style from "../Experience.module.scss";

export const ExperienceBlock: React.FC<ExperienceBlockType> = ({endValue, interval, subTitle}) => {

  const [value, setValue] = useState<number>(0);
  const duration = interval / endValue;

  const experienceBlockRef = useRef(null);

  useEffect(() => {
    let counter: NodeJS.Timer;
    const blockElement = experienceBlockRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        counter = setInterval(() => {
          setValue((prevState) => {
            if (prevState < endValue) {
              return prevState + 1;
            } else {
              clearInterval(counter);
              return prevState;
            }
          });
        }, duration);
      } else {
        clearInterval(counter);
        setValue(0);
      }
    }, {rootMargin: "0px", threshold: 0.1});

    if (blockElement) {
      observer.observe(blockElement);
    }

    return () => {
      if (blockElement) {
        observer.unobserve(blockElement);
      }
      clearInterval(counter);
    }
  }, [endValue, duration]);

  return (
    <div className={style.experienceBlock} ref={experienceBlockRef}>
      <p className={style.number}>{value}+</p>
      <p className={style.subTitle}>{subTitle}</p>
    </div>
  );
};

//types
type ExperienceBlockType = {
  theme?: string
  endValue: number
  interval: number
  subTitle: string
}