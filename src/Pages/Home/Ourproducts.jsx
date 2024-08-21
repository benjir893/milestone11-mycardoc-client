import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";


const Ourproducts = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://mycardocserver02.vercel.app/prodects')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="mt-20 mb-20">
            <div className="text-center mb-10">

                <h1 className='text-orange-600 font-bold font-Gupta mb-3'>Our Popular Products </h1>
                <h1 className='text-2xl font-Gupta font-bold'>Our Service Area</h1>
                <p className="pt-5">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-3 mt-5">
                {
                    products.map(product =><ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
            <div className="w-full text-center mt-4 mb-10">
                <Link to={'/'}><button className="btn btn-outline text-orange-500">see more products..</button></Link>
            </div>
        </div>
    );
};

export default Ourproducts;