import { createStore } from "@poly-state/poly-state";
import { useStore } from "@poly-state/react";
import { GlobalStore } from "../types/store";

import { withDevToolsExtention } from "./withDevtoolExtension";
// import { demoTM } from '../data/demo'

export const initialStore: GlobalStore.Animation = {
  cursor: null,
  scroll: {
    x: 0,
    y: 0,
  },
};

export const globalStore = createStore(initialStore);

export const useGlobalStore = () =>
  useStore<GlobalStore.Animation>(globalStore);

if (process.env.NODE_ENV === "development") {
  withDevToolsExtention(globalStore, "GOBAL_STORE");
}
