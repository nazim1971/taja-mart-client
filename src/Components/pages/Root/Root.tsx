import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div className="max-w-[1920px] mx-auto">
         <div className="w-[96%] mx-auto">
         <Outlet/>
         </div>
          <Footer/>
        </div>
    );
};

export default Root;