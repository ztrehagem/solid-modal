import { Component, useContext } from "solid-js";
import { Modal, ModalContext } from "../lib/main";
import { content, root } from "./HelloModal.css";
import { NameForm } from "./NameForm";

export interface Props {
  name: string;
}

export const HelloModal: Component<Props> = (props) => {
  const modal = useContext(ModalContext);

  const closeModalHandler = (e: Event): void => {
    e.preventDefault();
    modal.pop();
  };

  const submitHandler = (name: string) => {
    modal.push(() => <HelloModal name={name} />);
  };

  return (
    <Modal>
      <div class={root} onClick={(e) => e.stopPropagation()}>
        <div class={content}>
          <p>Hello, {props.name}!</p>

          <button type="button" onClick={closeModalHandler}>
            closeModal
          </button>

          <p>Push the same modal recursively.</p>

          <NameForm onSubmit={submitHandler} />
        </div>
      </div>
    </Modal>
  );
};
