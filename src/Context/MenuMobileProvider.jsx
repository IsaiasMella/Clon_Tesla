import { createContext, useState } from "react";

export const MenuMobileContext = createContext();

export const MenuMobileProvider = ({children}) => {
  const [portalMobileIsOpen, setPortalMobileIsOpen] = useState(false);

  const setMenuMobilePortal = () => {
    setPortalMobileIsOpen(!portalMobileIsOpen)
  };

  const value = {
    portalMobileIsOpen,
    setMenuMobilePortal
  };

  return (
    <MenuMobileContext.Provider value={value}>
        {children}
    </MenuMobileContext.Provider>
  );
};
