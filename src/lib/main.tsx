import { Component, createContext, createSignal, JSXElement } from "solid-js";

export interface ModalManager {
  stack: () => readonly Component[];
  push(component: Component): void;
  pop(): void;
  flush(): void;
}

export const ModalContext = createContext<ModalManager>();

export interface ModalProviderProps {
  children: JSXElement;
}

export const ModalProvider: Component<ModalProviderProps> = (props) => {
  const [stack, setStack] = createSignal<Component[]>([]);

  const modalManager: ModalManager = {
    stack() {
      return stack();
    },
    push(component) {
      setStack((prev) => [...prev, component]);
    },
    pop() {
      setStack((prev) => prev.slice(0, -1));
    },
    flush() {
      setStack([]);
    },
  };

  return (
    <ModalContext.Provider value={modalManager}>
      {props.children}
    </ModalContext.Provider>
  );
};
