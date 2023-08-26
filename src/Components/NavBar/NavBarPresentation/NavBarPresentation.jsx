import { useContext } from "react";
import { FunctionNotAvailable } from "../../../Context/FunctionNotAvailableProvider";
import { NavBarDesktop } from "./NavBarDesktop/NavBarDesktop";

export const NavBarPresentation = () => {
  const { setPortalOriginalTesla } = useContext(FunctionNotAvailable);

  return (
    <>
      <NavBarDesktop setPortalOriginalTesla={setPortalOriginalTesla} />
    </>
  );
};
