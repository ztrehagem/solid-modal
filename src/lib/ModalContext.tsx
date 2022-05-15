import {
  Accessor,
  Component,
  createContext,
  createSignal,
  JSXElement,
} from "solid-js";

export interface ModalContextValue {
  stack: Accessor<Component[]>;
  push: (component: Component) => void;
  pop: () => void;
  flush: () => void;
}

export const ModalContext = createContext<ModalContextValue>({
  stack: () => [],
  push: () => void 0,
  pop: () => void 0,
  flush: () => void 0,
});

export interface ModalContextProps {
  children?: JSXElement;
}

export const ModalContextProvider: Component<ModalContextProps> = (props) => {
  const [stack, setStack] = createSignal<Component[]>([]);

  const modalManager: ModalContextValue = {
    stack,
    push: (component) => setStack((prev) => [...prev, component]),
    pop: () => setStack((prev) => prev.slice(0, -1)),
    flush: () => setStack([]),
  };

  return (
    <ModalContext.Provider value={modalManager}>
      {props.children}
    </ModalContext.Provider>
  );
};
