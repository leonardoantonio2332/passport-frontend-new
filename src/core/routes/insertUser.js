import { InsertUser } from "components/pages/InsertUser";

export const insertUser = {
  basePath: "insert-user",
  paths: [
    {
      path: "/",
      element: <InsertUser />,
    },
  ],
};
