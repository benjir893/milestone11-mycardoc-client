import { Link } from "react-router-dom";


const Ourteamcard = ({ team }) => {
    const { employee_Name, img, position, experience_years, job_description } = team;

    return (
        <div className="card bg-base-100 w-96 shadow-xl mt-10 mb-10">
            <figure>
                <img
                    src={img}
                    alt="employee" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold font-Gupta">{employee_Name}</h2>
                <h1 className="font-bold font-Gupta">{position}</h1>
                <h1 className="font-bold font-Gupta">Years of Experience: {experience_years}</h1>
                <p className="font-Gupta">{job_description}</p>
                <div className="card-actions justify-end">
                   <Link to={-1}> <button className="btn btn-primary bg-orange-500 text-white">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Ourteamcard;