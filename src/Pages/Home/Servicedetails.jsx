import { Link } from "react-router-dom";


const Servicedetails = ({ service }) => {
    const { _id, title, img, price, description } = service;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={img}
                    alt="Service" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> Service: {title}</h2>
                <h2 className="card-title">Price: {price}</h2>
                {/* <p>About Service: {description}</p> */}
                <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-orange-500">Book Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Servicedetails;