import { Component, useContext } from "solid-js";
import { ModalContext } from "../lib/main";
import { NameForm } from "./NameForm";

export const ModalDemo: Component = () => {
  const modal = useContext(ModalContext);

  const submitHandler = (name: string) => {
    modal?.push(() => <div>{name}</div>);
  };

  const dismissModal = (e: Event): void => {
    e.preventDefault();
    modal?.pop();
  };

  return (
    <section>
      <h2>Demo</h2>

      <NameForm onSubmit={submitHandler} />

      <button type="button" onClick={dismissModal}>
        pop
      </button>

      <div>{modal?.stack().length ? "active" : "inactive"}</div>

      <div>
        {((Component) => Component && <Component />)(modal?.stack().at(-1))}
      </div>
    </section>
  );
};
