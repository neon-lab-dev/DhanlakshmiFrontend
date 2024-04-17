import React from "react";
import "./styles.css";
import RoutesContainer from "./routes/routes";
import { GlobalProvider } from "./context/GlobalContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const App = () => {
  return (
    <GlobalProvider>
      <QueryClientProvider client={queryClient}>
        <RoutesContainer />
        {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
      </QueryClientProvider>
    </GlobalProvider>
  );
};

export default App;
