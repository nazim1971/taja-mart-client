import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div className="max-w-[1920px] mx-auto">
          <Outlet/>
          <Footer/>
        </div>
    );
};

export default Root;