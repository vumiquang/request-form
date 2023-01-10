import { createBrowserRouter, redirect } from "react-router-dom";
import AdminPage from "../pages/AdminPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import LoginPage from "../pages/LoginPage/LoginPage.tsx";
import PageNotFound from "../pages/PageNotFound.tsx";
import App from "../App";

const checkLogin = (props) => {
  const user = localStorage.getItem("user");
  if (user == null) {
    return redirect("/login");
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: checkLogin,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "admin",
        element: <AdminPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
