import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FunctionNotAvailableProvider, MenuMobileProvider } from "./Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FunctionNotAvailableProvider>
    <MenuMobileProvider>
      <App />
    </MenuMobileProvider>
  </FunctionNotAvailableProvider>
);
