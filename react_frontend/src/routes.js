/* eslint-disable */
import { useRoutes } from "react-router-dom";
import PersonalDetails from "./pages/PersonalDetails";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <PersonalDetails />,
    },
  ]);
}
