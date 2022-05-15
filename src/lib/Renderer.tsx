import { Component, useContext } from "solid-js";
import { Transition } from "solid-transition-group";
import { ModalContext } from "./ModalContext";

export const Renderer: Component = () => {
  const { stack } = useContext(ModalContext);
  const top = () => stack().at(-1);

  return (
    <Transition name="zsm-t">
      {((Component) => Component && <Component />)(top())}
    </Transition>
  );
};
