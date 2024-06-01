import React, {useContext, useEffect, useId} from "react";
import {ImageContext} from "../contexts/ImageContext";


export const ImageComponent: React.FC<ImageComponentType> = ({src}) => {

  const {registerImage, uploadImage} = useContext(ImageContext);
  const id = useId();

  useEffect(() => {
    registerImage(id);
  }, [])

  return <img src={src} alt="" onLoad={() => uploadImage(id)}/>
}

//types
type ImageComponentType = {
  src: string
}