import App from "App";
import { ReactElement, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Graph from "./components/Graph";

export const Graph1 = lazy(() => import("./components/Graph"));

const Router = (): ReactElement => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <div>this is error</div>,
    },
    {
      path: "graph/:id",
      element: <Graph />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
