import { useEffect, useState } from "react";
import Ourteamcard from "./Ourteamcard";
import Headerbanner from "../Header/Headerbanner";


const Ourteam = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('emp.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])
    return (
        <div>
            <div className="text-center mb-10                                                                                                                                                                                                                                                                                                   ">
                <h1 className='text-orange-600 font-bold font-Gupta mb-3'>Our Team</h1>
                <h1 className='text-2xl font-Gupta font-bold'>Meet Our Team of Experiences</h1>
                <p className="pt-5">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
                {
                    teams.map(team => <Ourteamcard key={team._id} team={team}></Ourteamcard>)
                }
            </div>
            <div className="">
                <Headerbanner></Headerbanner>
            </div>
        </div>
    );
};

export default Ourteam;