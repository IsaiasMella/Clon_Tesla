import { useEffect } from "react";

import { NavBarPresentation } from "./NavBarPresentation/NavBarPresentation";

export const NavBar = () => {

  useEffect(() => {
    const listItems = document.querySelectorAll("#navigator li");
    const box = document.querySelector("#box");

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
    <>
      <NavBarPresentation />
    </>
  );
};
