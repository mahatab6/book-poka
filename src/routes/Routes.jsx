import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Root from "./root/Root";
import Banner from "../components/banner/Banner";
import Bookdetails from "../components/pages/Bookdetails";
import ListedBooks from "../components/pages/ListedBooks";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            index: true,
            path:'/',
            hydrateFallbackElement: <div>Loading...</div>,
            loader:() => fetch ('bookData.json'),
            Component: Banner,
        },
        {
          path:'/bookdetails/:id',
          hydrateFallbackElement: <div>Loading...</div>,
          loader:() => fetch ('bookData.json').then(res => res.json()),
          Component: Bookdetails,
        },
        {
          path:'/listed-books',
          loader:() => fetch ('bookData.json').then(res => res.json()),
          Component: ListedBooks,
        }
      ]
    },
  ]);