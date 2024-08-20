import { BsSearch } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import NavTop from "../Nav/NavTop";


const Nav = () => {
    
    const allCat:string[] = [
        "All Categories","OFFER", "Sariaha Oil", "Ghee", "Datea","Honey", "Maaala","Organic Oil"
    ]


    return (
        <div >
             {/* Nav Search */}
             <NavTop/>
            {/* Nav top */}
            <div className="bg-blue-400">
           <nav  className="h-[50px] flex justify-center items-center w-[1290px] mx-auto text-white ">
            আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন:  +8801321208940 
            </nav>
           </div>
           {/* Nap center */}
           <div className="">
           <nav className="h-20 flex  w-[1290px] mx-auto justify-between items-center border  ">
            <BsSearch className="col-start-1" />
            <img className="h-[65px] rounded-xl " src="https://ghorerbazar.com/cdn/shop/files/logo.webp?v=1707766182&width=500" alt="" />
            <FaShoppingBag />
            </nav>
           </div>
                {/* Nav bottom */}
           <div className="bg-stone-200 "   >
            <nav className="flex lg:w-[1290px] mx-auto h-12 items-center px-3 justify-between">
           {
            allCat.map((i,idx)=>
            <p key={idx}>
                {i}
            </p>)
           }
            </nav>
           
           </div>

        </div>
    );
};

export default Nav;