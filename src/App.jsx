import { useContext } from "react";
import { RouterProvider } from "react-router-dom";

import { FunctionNotAvailable } from "./Context/FunctionNotAvailableProvider";

import { NavBar } from "./Components/NavBar";
import { router } from "./routes/root";
import { MainPortals } from "./Components/Layouts/Portals/MainPortals";
import { SendToTesla } from "./Components/Portals";

function App() {
  const { portalOriginalTeslaIsOpen, setPortalOriginalTesla } =
    useContext(FunctionNotAvailable);
  return (
    <>
      {portalOriginalTeslaIsOpen && (
        <MainPortals controlPortal={setPortalOriginalTesla}>
          <SendToTesla />
        </MainPortals>
      )}
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
