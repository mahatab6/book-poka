import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Root from "./root/Root";
import Banner from "../components/banner/Banner";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            index: true,
            path:'/',
            loader:() => fetch ('bookData.json'),
            Component: Banner,
        }
      ]
    },
  ]);