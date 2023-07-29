"use client";

import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { store } from "./store";

interface ProviderProps {
  children?: any;
}

const Providers = ({ children }: ProviderProps) => {
  const queryClient = new QueryClient();

  return (
    <>
      {/* Redux Query Provider */}
      <QueryClientProvider client={queryClient}>
        {/* Redux ToolKit Provider */}
        <Provider store={store}>{children}</Provider>
      </QueryClientProvider>
    </>
  );
};

export default Providers;
