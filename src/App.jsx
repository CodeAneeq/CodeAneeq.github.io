import { RouterProvider } from "react-router-dom";
import publicRoutes from "./routes/router";

function App() {
  return (
    <RouterProvider router={publicRoutes}/>
  );
}

export default App;
