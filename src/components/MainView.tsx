import type { Component } from "solid-js";
import { ModalDemo } from "../components/ModalDemo";
import { PackageInformation } from "../components/PackageInformation";

export const MainView: Component = () => {
  return (
    <main>
      <PackageInformation />

      <ModalDemo />
    </main>
  );
};
