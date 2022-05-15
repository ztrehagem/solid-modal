import { Component, useContext } from "solid-js";
import { Transition } from "solid-transition-group";
import { ModalContext } from "./ModalContext";

export const Backdrop: Component = () => {
  const { stack } = useContext(ModalContext);
  const showing = () => stack().length > 0;

  return (
    <Transition name="zsm-t">
      {showing() ? <div class="zsm-backdrop"></div> : null}
    </Transition>
  );
};
