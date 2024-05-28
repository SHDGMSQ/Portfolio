import React, {useState, createContext, ReactNode, ReactElement} from "react";

interface ModalContextType {
  isModalOpen: boolean;
  modalContent: ReactNode
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

interface LoaderContextType {
  isShowLoader: boolean,
  showLoader: () => void,
  hideLoader: () => void,
}

export const ModalContext = createContext<ModalContextType>({
  isModalOpen: false,
  modalContent: <></>,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const openModal = (content: ReactNode) => {
    setModalContent(content);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  }

  return (
    <ModalContext.Provider value={{ isModalOpen, modalContent, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

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
