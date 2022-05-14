import type { Component } from "solid-js";
import { ModalDemo } from "./components/ModalDemo";
import { PackageInformation } from "./components/PackageInformation";
import { ModalProvider } from "./lib/main";

export const App: Component = () => {
  return (
    <ModalProvider>
      <main>
        <PackageInformation />

        <ModalDemo />
      </main>
    </ModalProvider>
  );
};
