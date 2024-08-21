import { data } from "autoprefixer";
import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../firebase/AuthProvider";


const Checkout = () => {
    const service = useLoaderData()
    const { title, img, price, description } = service;
    const { user } = useContext(AuthContext);
    // const navigate = useNavigate();

    const handleconfirm = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const contact = form.get('contact');
        const bookingdate = form.get('bookingdate');
        const address = form.get('address');
        const message = form.get('message')
        const customer = {img, title, name, price, email, contact, bookingdate, address, message };
        // console.log(customer)

        fetch('https://mycardocserver02.vercel.app/customer',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.insertedId){

                    Swal.fire("Our customer service will be in touch shortly");
                }
                
            })


    }

    return (
        <div className="card bg-base-100 w-full shadow-xl mt-10 mb-10">
            <figure>
                <img
                    src={img}
                    alt="picture" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">Special</div>
                </h2>
                <p className="font-bold font-roboto">Price : {price}</p>
                <p className="font-semibold font-roboto"><span className="font-bold text-lg">Service Includes:</span> {description}</p>
                <h2 className="text-center text-orange-600 font-Gupta font-semibold text-xl">Service Booking Form</h2>
                <div className="card-actions justify-end">
                    {/* form starts */}
                    <form onSubmit={handleconfirm} className="card-body">
                        <div className="grid md:grid-cols-2 gap-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="your name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" defaultValue={user?.email} placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">contact number</span>
                                </label>
                                <input type="text" placeholder="contact number" name="contact" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Booking Date</span>
                                </label>
                                <input type="date" placeholder="contact number" name="bookingdate" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" placeholder="your address" name="address" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">message</span>
                                </label>
                                <input type="text" placeholder="your message" name="message" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <div className="md:flex gap-2">
                                <input type="submit" value="confirm" className="btn btn-primary" />
                                <Link to={'/'}><button className="btn btn-primary">Back</button></Link>
                            </div>
                        </div>
                    </form>
                    {/* form ends */}
                </div>
            </div>
        </div>
    );
};

export default Checkout;