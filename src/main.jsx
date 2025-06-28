import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { SidebarContextProvider } from "./context/sidebar-context.jsx";
import { ModeProvider } from "./context/mode-context.jsx";

createRoot(document.getElementById("root")).render(
  <SidebarContextProvider>
    <ModeProvider>
    <App />
    </ModeProvider>
  </SidebarContextProvider>
);
