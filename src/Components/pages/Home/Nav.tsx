import { BsSearch } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";


const Nav = () => {
    
    const allCat:string[] = [
        "All Categories","OFFER", "Sariaha Oil", "Ghee", "Datea","Honey", "Maaala","Organic Oil"
    ]


    return (
        <div >
            <div className="bg-blue-400">
           <nav  className="h-[50px] flex justify-center items-center w-[1290px] mx-auto text-white ">
            আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন:  +8801321208940 
            </nav>
           </div>
           <div className="lg:w-[1290px] mx-auto"   >
           

            <nav className="h-20 flex  mx-auto justify-between items-center border  ">
            <BsSearch className="col-start-1" />
            <img className="h-16 w-16 rounded-xl " src="https://i.ibb.co/QcPMHwG/Screenshot-2024-08-08-004934.png" alt="" />
            <FaShoppingBag />
            </nav>

            <nav className="flex h-12 items-center px-3 bg-stone-200 justify-between">
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