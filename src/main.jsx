import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FunctionNotAvailableProvider } from "./Context/FunctionNotAvailableProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FunctionNotAvailableProvider>
    <App />
  </FunctionNotAvailableProvider>
);
