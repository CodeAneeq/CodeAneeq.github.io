import { RouterProvider } from "react-router-dom";
import publicRoutes from "./routes/router";
import BoxBg from "./components/background/particleBg";

function App() {
  return (
    <RouterProvider router={publicRoutes} />
  );
}

export default App;
