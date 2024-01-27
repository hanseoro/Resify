import React from 'react';
import cn from './Navbar.module.css'

const Navbar: React.FC = () => {
    return (
        <nav className={"bg-primary shadow-lg sticky top-0 z-50"}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4"> 
                        <a href="#" className={"flex items-center py-5 px-2 text-secondary " + cn.videobold}>
                            <span>Resify</span>
                        </a>
                        <div className="hidden md:flex items-center space-x-1">
                            <a href="#" className={"py-5 px-3 text-secondary hover:text-opacity-80 " + cn.videonormal}>Collective</a>
                            <a href="#" className={"py-5 px-3 text-secondary hover:text-opacity-80 " + cn.videonormal}>Services</a>
                            <a href="#" className={"py-5 px-3 text-secondary hover:text-opacity-80 " + cn.videonormal}>About</a>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="#" className={"py-5 px-3 text-secondary hover:text-opacity-80 " + cn.videobold}>Log In</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

