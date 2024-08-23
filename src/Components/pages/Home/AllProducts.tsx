import { useEffect, useState } from "react";

interface products {
    image: string;
    name: string;
    price: number;
}

const AllProducts = () => {


    const [products,setProducts] = useState<products[]>([]);

    useEffect(()=>{
        fetch("products.json")
        .then(res=> res.json() )
        .then((data:products[] )=> setProducts(data))
    },[])

    console.log(products);

    return (
        <div className="my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:w-[1290px] mx-auto  ">
                {
                    products.map((i,idx)=>
                    <div key={idx} className="h-[450px] border-2 p-4 flex flex-col justify-center ">
                     <img className="h-[260px] " src={i.image} alt="" />
                     <h1 className="pt-4">{i.name} </h1>
                     <p className="py-4">{i.price} </p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllProducts;