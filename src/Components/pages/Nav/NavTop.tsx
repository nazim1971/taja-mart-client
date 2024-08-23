import { BiSearch } from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";

const NavTop = () => {
    return (
        <div className="bg-slate-200 py-8 absolute w-full">
            <nav className=" lg:w-[1290px] mx-auto place-items-center grid grid-cols-1 lg:grid-cols-4 gap-8 justify-items-center">
              <img className="h-16" src="https://ghorerbazar.com/cdn/shop/files/logo.webp?v=1707766182&width=500" alt="" />
                <div className="col-span-2">
                    <div className="relative ">
                        <input className="h-12 w-full border rounded-3xl" type="text" />
                        <BiSearch className="absolute right-5 top-4"  />
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <p className="text-stone-400">Popular Searches:</p>
                  <a className="hover:underline" href="#">Organic Oil</a>
                  <a className="hover:underline" href="#">Honey</a>
                  <a className="hover:underline" href="#">Nuts & Seeds</a>
                    </div>
                </div>
                <FaShoppingBag />
            </nav>
        </div>
    );
};

export default NavTop;