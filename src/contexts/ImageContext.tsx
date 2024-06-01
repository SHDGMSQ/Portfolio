import React, {createContext, ReactNode, useCallback, useEffect, useMemo, useState} from "react";


interface ImageContextType {
  allImagesUpload: boolean;
  registerImage: (id: string) => void;
  uploadImage: (id: string) => void;
}

export const ImageContext = createContext<ImageContextType>({
  allImagesUpload: false,
  registerImage: () => {},
  uploadImage: () => {},
});

export const ImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [allImagesUpload, setAllImagesUpload] = useState<boolean>(false);
  const [images, setImages] = useState<Array<{id: string, isUpload: boolean}>>([]);

  useEffect(() => {
    setAllImagesUpload(images.every((image) => image.isUpload));
  }, [images])

  const registerImage = useCallback((id: string) => {
    setImages((prevImages) => [...prevImages, {id, isUpload: false}])
  }, [])

  const uploadImage = useCallback((id: string) => {
    setImages((prevImages) => prevImages.map((image) => image.id === id ? {...image, isUpload: true} : image));
  }, [])

  const contextValue = useMemo(() => ({
    allImagesUpload,
      registerImage,
      uploadImage
  }), [allImagesUpload, registerImage, uploadImage])

  return (
    <ImageContext.Provider value={contextValue}>
      {children}
    </ImageContext.Provider>
  );
};