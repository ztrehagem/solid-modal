import { Component, JSXElement } from "solid-js";

export interface Props {
  children?: JSXElement;
}

export const Modal: Component<Props> = (props) => {
  return <div class="zsm-modal">{props.children}</div>;
};
