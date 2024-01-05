import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import App from "../App";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {path:'/', element:<Home/>},
        {path:'/post-job', element:<CreateJob />},
        {path:'/my-job', element:<MyJobs />},
        {path:'/salary', element:<SalaryPage />},
        {path:'/edit-job/:id', element:<UpdateJob />, loader:({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)},
    ]
    },
  ]);

  export default router;