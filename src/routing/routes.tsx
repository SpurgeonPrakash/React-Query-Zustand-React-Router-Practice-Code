import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";
import UserList from "./UserList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "users", element: <UserList /> },
      { path: "contact", element: <ContactPage /> },
      { path: "user/:id", element: <UserDetailPage /> },
    ],
  },
]);

export default router;
