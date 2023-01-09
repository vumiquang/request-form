import { createBrowserRouter } from "react-router-dom";
import AdminPage from "../pages/AdminPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import PageNotFound from "../pages/PageNotFound.tsx";
import App from "../App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound/>,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    
    ],
  },
]);

export default router;
