import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import moment from 'moment';
import useAuth from '../../Hooks/useAuth';
// import { useContext } from 'react';
// import { AuthContext } from '../../firebase/AuthProvider';

const Navitems = () => {
    const{logout, user} = useAuth();  //using useAuth hook
    // const { logout, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handlelogout = () => {
        logout()
            .then(() => {
                console.log('user logged out');
                navigate('/login')
            })
            .then(error => {
                console.error(error)
            })

    }

    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-auto p-2 shadow font-Gupta text-xl ">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/'}>About</Link></li>

                        <li>
                            <li><Link to={'/'}>Services</Link></li>
                            <ul className="p-2 text-black text-lg z-10">
                                <li><Link to={'/'}>Repair</Link></li>
                                <li><Link to={'/'}>CarWash</Link></li>
                                <li><Link to={'/'}>ChangeOil</Link></li>

                            </ul>
                        </li>
                        <li><Link to={'/'}>Blogs</Link></li>
                        <li><Link to={'/'}>Contacts</Link></li>
                        <li><Link to={'/customer'}>Orders</Link></li>

                    </ul>
                </div>
                <a className="btn btn-ghost"><img className='w-20' src={logo} alt="" /></a>
                <p className='font-Gupta font-semibold text-white'>{moment().format("MMMM Do YYYY")}</p>
            </div>
            <div className="navbar-center hidden lg:flex font-Gupta font-semibold text-white text-xl">
                <ul className="menu menu-horizontal px-1 text-xl">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/'}>About</Link></li>

                    <li>
                        <details>
                            <summary><Link to={'/'}>Services</Link></summary>
                            <ul className="p-2 text-black text-lg z-10">
                                <li><Link to={'/'}>Repair</Link></li>
                                <li><Link to={'/'}>CarWash</Link></li>
                                <li><Link to={'/'}>ChangeOil</Link></li>
                            </ul>
                        </details>
                    </li>
                    {
                        user?.email ? <>

                            <li><Link to={'/customer'}>Orders</Link></li>
                            <li><Link to={'/'}>Blogs</Link></li>
                        </> : <> <li><Link to={'/'}>Blogs</Link></li>
                            <li><Link to={'/'}>Contacts</Link></li></>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {/* cart logo starts*/}
                <div className="">
                    {user?.email}
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* cart logo ends */}
                    {/* avatar starts */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                user ? <>
                                    <li><Link to={'/register'}><button className='btn'>Profile</button></Link></li>
                                    <li><Link to={'/register'}><button className='btn'>Appointment</button></Link></li>
                                    <li><button onClick={handlelogout} className='btn'>Logout</button></li>
                                </> : <><li><Link to={'/register'}><button className='btn'>Register</button></Link></li>
                                    <li><Link to={'/login'}><button className='btn'>Login</button></Link></li></>

                            }




                        </ul>
                    </div>
                    {/* avatar ends */}

                </div>
            </div>
        </div>
    );
};

export default Navitems;