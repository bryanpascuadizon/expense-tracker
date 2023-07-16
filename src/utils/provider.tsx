"use client";

import { Provider } from "react-redux";
import { store } from "./store";

interface ProviderProps {
  children?: any;
}

const Providers = ({ children }: ProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
