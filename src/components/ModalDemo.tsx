import { Component, useContext } from "solid-js";
import { ModalContext } from "../lib/main";
import { HelloModal } from "./HelloModal";
import { NameForm } from "./NameForm";

export const ModalDemo: Component = () => {
  const modal = useContext(ModalContext);

  const submitHandler = (name: string) => {
    modal.push(() => <HelloModal name={name} />);
  };

  return (
    <section>
      <h2>Demo</h2>

      <NameForm onSubmit={submitHandler} />
    </section>
  );
};
