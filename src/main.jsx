import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";
import Scanner from "./features/Scanner/Scanner.jsx";
import ScanHistory from "./features/ScanHistory/ScanHistory.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Scanner />
      </Layout>
    ),
  },
  {
    path: "scans",
    element: (
      <Layout>
        <ScanHistory />
      </Layout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
