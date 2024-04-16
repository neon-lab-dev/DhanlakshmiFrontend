import React from "react";
import "./styles.css";
import RoutesContainer from "./routes/routes";
import { GlobalProvider } from "./context/GlobalContext";

const App = () => {
  return (
    <GlobalProvider>
      <RoutesContainer />
    </GlobalProvider>
  );
};

export default App;
