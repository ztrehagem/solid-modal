import type { Component } from "solid-js";
import { MainView } from "./components/MainView";
import { ModalContextProvider, Backdrop, Renderer } from "./lib/main";

export const App: Component = () => {
  return (
    <ModalContextProvider>
      <MainView />
      <Backdrop />
      <Renderer />
    </ModalContextProvider>
  );
};
