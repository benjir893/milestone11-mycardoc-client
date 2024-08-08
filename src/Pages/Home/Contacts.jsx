import { FaCalendarAlt } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { MdEditLocationAlt } from "react-icons/md";

const Contacts = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-3 w-full bg-black pt-16 pl-8 pr-8 pb-16 rounded-lg">
                <div className="flex items-center border-2 border-solid border-white rounded-lg p-3">
                    <p className="p-2 "><FaCalendarAlt className="text-white" /></p>
                    <div className="p-2">
                        <p className="text-white font-teko">we are open Monday to Friday</p>
                        <h1 className="text-white font-bold font-roboto">7:00 am - 9:00 pm</h1>
                    </div>
                </div>
                <div className="flex items-center border-2 border-solid border-white rounded-lg p-3">
                    <p className="p-2 "><MdAddCall className="text-white" /></p>
                    <div className="p-2">
                        <p className="text-white font-teko">Have any question? call us</p>
                        <h1 className="text-white font-bold font-roboto">01-234-567891</h1>
                    </div>
                </div>
                <div className="flex items-center border-2 border-solid border-white rounded-lg p-3">
                    <p className="p-2 "><MdEditLocationAlt className="text-white" /></p>
                    <div className="p-2">
                        <p className="text-white font-teko">Need a repair ? Our address</p>
                        <h1 className="text-white font-bold font-roboto">green hills isenhower, Greenhills</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;