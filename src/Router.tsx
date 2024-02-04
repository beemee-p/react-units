import { ReactElement, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "App";

export const GraphWrap = lazy(() => import("./components/graph/GraphWrap"));

const Router = (): ReactElement => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <div>this is error</div>,
    },
    {
      path: "graph/:id",
      element: <GraphWrap />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
