import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import App from "../App";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {path:'/', element:<Home/>},
        {path:'/post-job', element:<CreateJob />},
    ]
    },
  ]);

  export default router;