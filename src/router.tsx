import { createBrowserRouter } from "react-router";
import Home from "@/pages/Home";
import Notifications from "@/pages/Notifications";
import Layout from "./Layout";
import Chat from "./pages/Chat";
import Wallet from "./pages/Wallet";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/notifications", element: <Notifications /> },
      { path: "/chat", element: <Chat /> },
      {
        path: "/wallet",
        element: <Wallet />,
      },
    ],
  },
]);

export default router;
