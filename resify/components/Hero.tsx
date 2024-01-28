import React from 'react';
import cn from './Navbar.module.css';

const HeroSection: React.FC = () => {
    return (
        <div className="flex items-center justify-start " style={{ marginTop: '220px'}}>
            <div className="text-left">
                <p className={"text-7xl text-secondary " + cn.videobold}>What's yours</p>
                <p className={"text-7xl text-secondary " + cn.videobold}>is yours</p>
                <p className={"mt-6 text-xl text-muted " + cn.poppins}>Let us keep it that way—secure homeownership in the digital</p>
                <p className={"text-xl text-muted " + cn.poppins}>landscape to verify property online and in person.</p>
            </div>

            <div className="flex-1">
                {/* <img src="stars.png" /> */}
            </div>
        </div>
    );
};

export default HeroSection;