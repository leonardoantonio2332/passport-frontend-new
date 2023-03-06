import { CreateUserManually } from "components/pages/CreateUserManually";

export const createUserManually = {
  basePath: "create-user-manually",
  paths: [
    {
      path: "/",
      element: <CreateUserManually />,
    },
  ],
};
