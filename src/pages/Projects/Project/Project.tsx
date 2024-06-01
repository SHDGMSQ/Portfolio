import React, {useEffect, useRef, useState} from "react";
import style from "./Project.module.scss";
import {Button} from "../../../components/Button/Button";
import { FaCodeBranch } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import {ImageComponent} from "../../../components/ImageComponent";

const rel = "noreferrer nofollow noopener";

export const Project: React.FC<ProjectPropsType> = ({imageSrc, projectName, description, linkDemo, linkCode}) => {

  const pRef = useRef<HTMLParagraphElement>(null);
  const linkContainerRef = useRef(null);

  const [isAtTop, setIsAtTop] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const onScroll = () => {
    const isAtTopNow = pRef.current?.scrollTop === 0;
    setIsAtTop(isAtTopNow);
  };

  useEffect(() => {
    const linkElement = linkContainerRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, {rootMargin: "0px", threshold: 1});

    if (linkElement) {
      observer.observe(linkElement);
    }

    const pElement = pRef.current;
    if (pElement) {
      pElement.addEventListener('scroll', onScroll);
      return () => pElement.removeEventListener('scroll', onScroll);
    }

    return () => {
      if (linkElement) {
        observer.unobserve(linkElement)
      }
    }

  }, []);

  return (
    <div className={style.project} >
      <div className={style.imgContainer} ref={linkContainerRef}>
        <ImageComponent src={imageSrc} />
        <div className={`${style.linksContainer} ${isVisible ? style.show: ""}`}  >
          <a href={linkDemo} target={"_blank"} rel={rel}>
            <Button title={"Demo"} logo={<FaExternalLinkAlt />}/>
          </a>
          {linkCode && <a href={linkCode} target={"_blank"} rel={rel} className={style.code}>
            <Button title={"Code"} logo={<FaCodeBranch />}/>
          </a>
          }
        </div>
      </div>
      <span className={style.title}>{projectName}</span>
      <p className={`${style.description} ${!isAtTop ? style.hideGradient : ''}`} ref={pRef} onScroll={onScroll}>{description}</p>
    </div>
  );
};

//types
export type ProjectPropsType = {
  projectName: string
  description: string
  imageSrc: string,
  linkDemo: string
  linkCode?: string
}