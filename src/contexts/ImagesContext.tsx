import React, {createContext, ReactNode, useCallback, useContext, useState} from "react";


interface ImagesContextType {
  registerImage: (id: string) => void,
  markImageAsLoaded: (id: string) => void,
  allImagesLoaded: boolean,
}

const ImageLoadContext = createContext({
  registerImage: (id: string) => {},
  markImageAsLoaded: (id: string) => {},
  allImagesLoaded: false,
});

export const useImageLoad = () => useContext<ImagesContextType>(ImageLoadContext);

export const ImagesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loadedImages, setLoadedImages] = useState({});
  const [totalImages, setTotalImages] = useState<number>(0);


  const registerImage = useCallback((id: string) => {
    debugger
    setTotalImages((prev) => prev + 1);
    setLoadedImages((prev) => ({ ...prev, [id]: false }));
  }, [children]);

  const markImageAsLoaded = useCallback((id: string) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  }, [children]);

  const allImagesLoaded = totalImages > 0 && Object.values(loadedImages).every((status) => status);
  console.log(allImagesLoaded);

  return (
    <ImageLoadContext.Provider value={{ registerImage, markImageAsLoaded, allImagesLoaded }}>
      {children}
    </ImageLoadContext.Provider>
  );
};