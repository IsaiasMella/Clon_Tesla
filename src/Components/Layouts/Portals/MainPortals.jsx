import { cloneElement } from "react";

export const MainPortals = ({ children, controlPortal }) => {
  return (
    <div
      onClick={controlPortal}
      className="absolute top-0 left-0 bg-black/60 w-full h-full z-[100]"
    >
      {cloneElement(children, { controlPortal })}
    </div>
  );
};
