import { UserQuery } from "components/pages/UserQuery";

export const userQuery = {
  basePath: "user-query",
  paths: [
    {
      path: "/",
      element: <UserQuery />,
    },
  ],
};
