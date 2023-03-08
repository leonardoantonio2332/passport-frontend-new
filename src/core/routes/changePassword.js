import { ChangePassword } from "components/pages/ChangePassword";

export const changePassword = {
  basePath: "change-password",
  paths: [
    {
      path: "/",
      element: <ChangePassword />,
    },
  ],
};
