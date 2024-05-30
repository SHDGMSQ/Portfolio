import React, {useState, createContext, ReactNode, ReactElement} from "react";

interface LoaderContextType {
  isShowLoader: boolean,
  showLoader: () => void,
  hideLoader: () => void,
}

export const LoaderContext = createContext<LoaderContextType>({
  isShowLoader: false,
  showLoader: () => {},
  hideLoader: () => {},
})

export const LoaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isShowLoader, setShowLoader] = useState<boolean>(false);

  const showLoader = () => {
    setShowLoader(true);
    document.body.style.overflow = "hidden";
  };
  const hideLoader = () => {
    setShowLoader(false);
  }

  return (
    <LoaderContext.Provider value={{ isShowLoader, showLoader, hideLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};


