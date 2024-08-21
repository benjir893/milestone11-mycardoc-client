import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../firebase/AuthProvider";
import { data } from "autoprefixer";
import Orderdetails from "./Orderdetails";
import Swal from "sweetalert2";
import axios from "axios";





const Orders = () => {
  
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url =`https://mycardocserver02.vercel.app/customer?email=${user?.email}`;

    useEffect(() => {
        axios.get(url, {withCredentials:true})
        .then(res => {
            setBookings(res.data)
        })
    // ======================
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         setBookings(data)
        //     })
        // ======================
    }, [url])

    const handleDelete = id =>{
        const proceed = confirm("Are you sure to delete it !");
        if(proceed){
            fetch(`https://mycardocserver02.vercel.app/customer/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    const remaining = bookings.filter(booking =>booking._id !== id)
                    setBookings(remaining)
                    Swal.fire("deleted successfully!");
                }
            })
        }
    }
    const handleConfirm = id =>{
        const proceed = confirm("Are you sure ..? you want to update?");
        if(proceed){
            fetch(`https://mycardocserver02.vercel.app/customer/${id}`, {
                method:'PATCH',
                headers:{ 'content-type':'application/json'},
                body: JSON.stringify({status:'confirmed'})
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.modifiedCount >0){
                    const remaining = bookings.filter(booking =>booking._id !== id);
                    const updatedData = bookings.find(booking => booking._id === id);
                    updatedData.status = 'confirmed';
                    const newDataset = [updatedData, ...remaining];
                    setBookings(newDataset);
                    Swal.fire("Updated successfully!");
                }
            })
        }
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Job</th>
                        <th>Customer Name</th>
                        <th>Service Charge</th>
                        <th>Contact</th>
                        <th>Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking =><Orderdetails key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></Orderdetails>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;