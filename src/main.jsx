import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ColorPickerApp from "./ColorPickerApp.jsx";
import CounterApp from "./CounterApp.jsx";
import "./index.css";
import ShoppingListApp from "./ShoppingListApp.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WorkoutListApp from "./WorkoutListApp.jsx";
import Home from "./Home.jsx";
import AddItem from "./AddItem.jsx";
import WoListApp from "./WoListApp.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/counter-app",
//     element: <CounterApp />,
//   },
//   {
//     path: "/colour-picker-app",
//     element: <ColorPickerApp />,
//   },
//   {
//     path: "/shopping-list-app",
//     element: <ShoppingListApp />,
//   },
//   {
//     path: "/shopping-list-app/add-item",
//     element: <AddItem />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <RouterProvider router={router} />
  <React.StrictMode>
    <WoListApp />
  </React.StrictMode>
);
