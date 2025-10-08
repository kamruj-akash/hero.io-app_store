import { createBrowserRouter } from "react-router";
import ErrorComponent from "../Components/ErrorComponent";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "*", Component: ErrorComponent },
    ],
  },
]);
