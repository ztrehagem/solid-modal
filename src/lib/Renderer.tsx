import { Component, useContext } from "solid-js";
import { ModalContext } from "./ModalContext";

export const Renderer: Component = () => {
  const { stack } = useContext(ModalContext);
  const top = () => stack().at(-1);

  return <>{((Component) => Component && <Component />)(top())}</>;
};
