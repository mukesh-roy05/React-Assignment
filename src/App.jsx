import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DataFetch from "./components/DataFetch";
import DataLoader from "./components/DataLoader";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DataFetch />,
      loader: DataLoader,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
