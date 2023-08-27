import { useEffect } from "react";

import { MenuMobilePresentation } from "./MenuMobilePresentation/MenuMobilePresentation";

export const MenuMobile = ({ controlPortalTesla, controlPortalMenu }) => {
  const handleClick = (href, e) => {
    e.stopPropagation()
    controlPortalMenu();
    window.location.hash = href;
  };

  useEffect(() => {
    const listItems = document.querySelectorAll("#navigatorMobile li");
    const box = document.querySelector("#boxMobile");

    listItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const { top, left, width, height } = item.getBoundingClientRect();

        box.style.setProperty("--mainAxis", `${left}px`);
        box.style.setProperty("--crossAxis", `${top}px`);
        box.style.setProperty("--width", `${width}px`);
        box.style.setProperty("--higth", `${height}px`);
        box.style.opacity = "1";
        box.style.visibility = "visible";
      });

      item.addEventListener("mouseleave", () => {
        box.style.opacity = "0";
        box.style.visibility = "hidden";
      });
    });

    return () => {};
  }, []);

  return (
    <MenuMobilePresentation
      controlPortalMenu={controlPortalMenu}
      handleClick={handleClick}
      controlPortalTesla={controlPortalTesla}
    />
  );
};
