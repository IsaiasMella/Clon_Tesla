import { useContext } from "react";

import { FunctionNotAvailable, MenuMobileContext } from "../../../Context";

import { NavBarDesktop } from "./NavBarDesktop/NavBarDesktop";
import { Logo } from "../../Images/Logo";

export const NavBarPresentation = () => {
  const { setPortalOriginalTesla } = useContext(FunctionNotAvailable);
  const { setMenuMobilePortal } = useContext(MenuMobileContext);

  return (
    <main
      id="nav-bar"
      className="py-4 px-6 md:px-12 flex items-center fixed top-0 w-full justify-between z-40"
    >
      <div className="flex flex-grow basis-0">
        <Logo />
      </div>

      <div
        id="box"
        className={`
        absolute bg-black/5 z-10
        rounded-md 
        top-0 left-0
        w-[var(--width)] h-[var(--higth)]
        translate-y-[var(--crossAxis)]
        translate-x-[var(--mainAxis)]
        transition-all duration-[400ms]
        ease-in-out opacity-0
        pointer-events-none
        `}
      />
      <section className="hidden lg:flex lg:flex-grow">
        <NavBarDesktop setPortalOriginalTesla={setPortalOriginalTesla} />
      </section>
      <div
        onClick={setMenuMobilePortal}
        id="navigator"
        className="cursor-pointer lg:hidden bg-transparent"
      >
        <p className="font-medium">Menú</p>
      </div>
    </main>
  );
};
