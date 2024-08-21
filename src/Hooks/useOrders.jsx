import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useOrders = () => {
    const{user} =useAuth();
    const [bookings, setBookings] = useState([]);

    const url = `https://mycardocserver02.vercel.app/customer?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBookings(res.data)
            })
    }, [url])
    return bookings;
};

export default useOrders;