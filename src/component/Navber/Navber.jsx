import { CiHome } from "react-icons/ci";
import React from 'react';
import { GrHomeRounded } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa";
import { TfiStatsUp } from "react-icons/tfi";
import Link from "next/link";
import Mylinks from "./Mylinks";


const Navber = () => {
    const navItems = [
        {
            path: "/",
            text: 'Home'
        },
        {
            path: "/timeline",
            text: 'Timeline'
        },
        {
            path: "/stats",
            text: 'Stats'
        }
    ]



    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                         {
                            navItems.map((items, index) => (
                                <Mylinks key={index} href = {items.path}>{items.text}</Mylinks>
                            ))
                         }
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-2xl" href={'/'}>
                        <span className='font-bold'>Keen</span>Keeper
                    </Link>
                </div>
                <div className="navbar-end hidden sm:flex">
                    {
                            navItems.map((items, index) => (
                                <Mylinks key={index} href = {items.path}>{items.text}</Mylinks>
                            ))
                         }
                </div>
            </div>
        </div>
    );
};

export default Navber;