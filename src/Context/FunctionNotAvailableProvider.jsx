import { createContext, useState } from "react";

export const FunctionNotAvailable = createContext();

export const FunctionNotAvailableProvider = ({ children }) => {

  const [portalOriginalTeslaIsOpen, setPortalOriginalTeslaIsOpen] = useState(false);

  const setPortalOriginalTesla = () => {
    setPortalOriginalTeslaIsOpen(!portalOriginalTeslaIsOpen);
  };

  const values = {
    portalOriginalTeslaIsOpen,
    setPortalOriginalTesla,
  };
  
  return (
    <FunctionNotAvailable.Provider value={values}>
      {children}
    </FunctionNotAvailable.Provider>
  );
};
