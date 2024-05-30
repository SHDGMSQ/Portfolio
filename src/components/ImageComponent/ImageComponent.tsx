import React, {useEffect} from "react";
import {useImageLoad} from "../../contexts/ImagesContext";


export const ImageComponent:React.FC<ImageComponentPropsType> = ({src, id}) => {

  const {registerImage, markImageAsLoaded} = useImageLoad();

  useEffect(() => {
    registerImage(id);
  }, [id, registerImage]);

  return (
    <img
      src={src}
      onLoad={() => {
        markImageAsLoaded(id);
      }}
      alt=""
    />
  );
};

//types

type ImageComponentPropsType = {
  src: string
  id: string
}