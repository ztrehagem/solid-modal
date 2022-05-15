import { Component, useContext } from "solid-js";
import { ModalContext } from "./ModalContext";

export const Backdrop: Component = () => {
  const { stack } = useContext(ModalContext);
  const showing = () => stack().length > 0;

  return <>{showing() ? <div class="zsm-backdrop"></div> : null}</>;
};
