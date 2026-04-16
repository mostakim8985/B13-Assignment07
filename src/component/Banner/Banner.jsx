import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div>
            
                <div className="hero bg-base-200 container mt-20 mb-10 mx-auto">
                    <div className="hero-content text-center">
                        <div className="sm:p-4">
                            <h1 className="sm:text-5xl text-3xl capitalize font-bold">Friends to keep close in your life</h1>
                            <p className="py-6 text-[14px]">
                                Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                                relationships that matter most.
                            </p>
                            <button className="btn btn-primary"><FaPlus></FaPlus> Add a Friend</button>
                        </div>
                    </div>
                </div>
           
        </div>
    );
};

export default Banner;