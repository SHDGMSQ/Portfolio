import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import {HashRouter} from 'react-router-dom';
import {App} from "./app/App";
import {ModalProvider} from "./contexts/ModalContext";
import {LoaderProvider} from "./contexts/LoaderContext";
import {ImageProvider} from "./contexts/ImageContext";

let root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <HashRouter>
    <ModalProvider>
      <LoaderProvider>
        <ImageProvider>
          <App />
        </ImageProvider>
      </LoaderProvider>
    </ModalProvider>
  </HashRouter>,
)