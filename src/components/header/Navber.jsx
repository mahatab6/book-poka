import React from 'react';
import { Link, NavLink } from 'react-router';

const Navber = () => {
    const link = <>
    <li className='ml-2 text-xl'><NavLink to='/' className={({isActive}) => isActive ? "text-blue-500 font-semibold" : "hover:text-blue-400 transition-colors duration-200"}>Home</NavLink></li>
    <li className='ml-2 text-xl'><NavLink to='listed-books' className={({isActive}) => isActive ? "text-blue-500 font-semibold" : "hover:text-blue-400 transition-colors duration-200"}>Listed Books</NavLink></li>
    <li className='ml-2 text-xl'><NavLink to='pages-to-read' className={({isActive}) => isActive ? "text-blue-500 font-semibold" : "hover:text-blue-400 transition-colors duration-200"}>Pages to Read</NavLink></li>
    </>
    return (
        <div className=''>
            <div className="navbar  ">
                
                    <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">Book Vibe</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        {link}
                        </ul>
                    </div>
                    <div className="navbar-end gap-3 ">
                    <Link to="log-in" className="btn btn-primary">Login</Link>
                    <Link to="sing-up" className='btn btn-primary'>Sing up</Link>
                    </div>
            </div>
        </div>
    );
};

export default Navber;