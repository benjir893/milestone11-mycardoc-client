
import { useEffect, useState } from "react";
import Servicedetails from "./Servicedetails";
import { Link } from "react-router-dom";



const Ourservices = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="text-center mb-10                                                                                                                                                                                                                                                                                                   ">
                <h1 className='text-orange-600 font-bold font-Gupta mb-3'>Services</h1>
                <h1 className='text-2xl font-Gupta font-bold'>Our Service Area</h1>
                <p className="pt-5">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
               {
                services.map(service =><Servicedetails key={service._id} service={service}></Servicedetails>)
               }
            </div>
            <div className="w-full text-center m-10">
                <Link to={'/'}><button className="btn btn-outline text-orange-500 font-roboto">more services..</button></Link>
            </div>
        </div>
    );
};

export default Ourservices;