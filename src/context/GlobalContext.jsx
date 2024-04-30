import React, { createContext, useContext, useEffect, useState } from "react";

// Create the global context
export const GlobalContext = createContext();

// Create the provider component
export const GlobalProvider = ({ children }) => {
  const [isUserSignUpModalOpen, setIsUserSignUpModalOpen] = useState(false);
  const [isSellerSignUpModalOpen, setIsSellerSignUpModalOpen] = useState(false);
  const [triggerScroll, setTriggerScroll] = useState(false);

  const value = {
    isUserSignUpModalOpen,
    setIsUserSignUpModalOpen,
    isSellerSignUpModalOpen,
    setIsSellerSignUpModalOpen,
    triggerScroll,
    setTriggerScroll,
  };

  useEffect(() => {
    if (isUserSignUpModalOpen || isSellerSignUpModalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isUserSignUpModalOpen, isSellerSignUpModalOpen]);

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
