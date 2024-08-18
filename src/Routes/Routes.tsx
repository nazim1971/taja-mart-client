import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/pages/Root/Root";
import Home from "../Components/pages/Home/Home";




const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: '/',
            element: <Home/>
        }
      ]
    },
  ]);

  export default routes;