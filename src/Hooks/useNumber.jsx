import axios from "axios";
import { useEffect, useState } from "react";


const useNumber = () => {
    const[number, setNumber] = useState(0);
    useEffect(()=>{
        axios.get('/getnumber')
        .then(res =>{
            // console.log(res.data);
            setNumber(res.data)
        })
    },[])
    return [number];  //also can be written return number; like this
};

export default useNumber;