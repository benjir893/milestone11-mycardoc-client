import moment from 'moment';
import logo from '../../assets/logo.svg';
import Headerbanner from './Headerbanner';

const Header = () => {
    return (
        <div className='bg-blue-700'>
            {/* <div className="items-center w-1/4 mx-auto rounded-xl p-1">
                <Headerbanner></Headerbanner>
                <div className="text-center">
                    <h1 className='text-white font-Gupta font-semibold text-xl'>{moment().format("MMM, Do, yyyy")}</h1>
                </div>
            </div> */}
        </div>
    );
};

export default Header;