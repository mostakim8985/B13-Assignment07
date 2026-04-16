"use client"
import { usePathname } from 'next/navigation';
import React from 'react';
import { GrHomeRounded } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa";
import { TfiStatsUp } from "react-icons/tfi";
import Link from "next/link";

const Mylinks = ({ href, children }) => {
    const pathname = usePathname();
    return (
        <Link href={href} className={`btn rounded-none btn-primary btn-soft ${pathname === href ? 'btn-active' : ''}`}>{href === '/' ? <GrHomeRounded></GrHomeRounded> : href === '/timeline' ? <FaRegClock></FaRegClock> : href === '/stats' ? <TfiStatsUp></TfiStatsUp> : ''}{children}</Link>
    );
};

export default Mylinks;