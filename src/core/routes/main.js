import { NotFound, Home } from "components/pages";

export const main = {
  basePath: "/",
  paths: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
};
