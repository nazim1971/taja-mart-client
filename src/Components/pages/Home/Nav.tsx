import { BsSearch } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";


const Nav = () => {
    return (
        <div >
            
           <div className="bg-blue-400">
           <nav  className="h-[50px] flex justify-center items-center w-[1290px] mx-auto text-white ">
            আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন:  +8801321208940 
            </nav>
           </div>

           <div>
            <nav className="h-20 flex lg:w-[1290px] mx-auto justify-between items-center border  ">
            <BsSearch className="col-start-1" />
            <img className="h-16 w-16 rounded-xl " src="https://i.ibb.co/QcPMHwG/Screenshot-2024-08-08-004934.png" alt="" />
            <FaShoppingBag />
            </nav>
           </div>


        </div>
    );
};

export default Nav;