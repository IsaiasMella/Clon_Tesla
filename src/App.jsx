import { RouterProvider } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { router } from "./routes/root";

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
