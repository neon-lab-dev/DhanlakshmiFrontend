import React from "react";
import "./styles.css";
import RoutesContainer from "./routes/routes";
import { GlobalProvider } from "./context/GlobalContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <GlobalProvider>
      <QueryClientProvider client={queryClient}>
        <RoutesContainer />
      </QueryClientProvider>
    </GlobalProvider>
  );
};

export default App;
