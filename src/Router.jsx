import React from "react";
import Home from "./components/Home";
import Blog from './pages/app'
import PostDetails from "./pages/post/[slug]";
import CategoryPost from "./pages/category/[slug]";
import Aboutus from "./components/aboutus";
import Dict from './components/Dictionary' 
import DictDetail from "./components/DictDetail";

const AppRoutes = [
  {
    path: "/",
    element: <><Home /></>,
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/post/:slug",
    element: <PostDetails /> 
  },
  {
    path: "/category/:slug",
    element: <CategoryPost />
  },
  {
    path: "/about",
    element: <Aboutus />
  },
  {
    path: "/dictionary",
    element: <Dict />
  },
  {
    path: "/dictionary/:word",
    element: <DictDetail />
  },
  {
    path: "/post/bitcoin-atms",
    element: <PostDetails />
  }
];

export default AppRoutes;
