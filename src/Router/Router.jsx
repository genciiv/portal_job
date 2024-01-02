import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import App from "../App";
import About from "../Pages/About";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {path:'/', element:<Home/>},
    ]
    },
  ]);

  export default router;