import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
    },
    {
        path: 'news',
        element: <h1>This is nesw page</h1>
    }
  ]);

  export default router;