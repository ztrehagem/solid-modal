import { Component, createSignal } from "solid-js";

export interface Props {
  onSubmit: (name: string) => void;
}

export const NameForm: Component<Props> = (props) => {
  const [name, setName] = createSignal("");

  const submitHandler = (e: Event) => {
    e.preventDefault();
    props.onSubmit(name());
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={name()}
        onInput={(e) => setName(e.currentTarget.value)}
      />

      <button type="submit">showModal</button>
    </form>
  );
};
