import React from 'react';
import bgImage from '../assets/more/3.png';

const HomePage = () => {
    return (
        <div
            className="w-full [60vh] md:h-screen  bg-center bg-no-repeat bg-cover flex items-center justify-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className=" p-8 rounded-lg text-center max-w-3xl md:w-1/2 md:ml-auto">
                <h2 className="text-lg md:text-3xl font-bold mb-4 rancho text-white">
                    Would you like a Cup of Delicious Coffee?
                </h2>
                <p className="text-white mb-6 text-xs md:text-lg ">
                    It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! 
                    Enjoy the beautiful moments and make them memorable.
                </p>
                <button className="bg-[#E3B577] hover:bg-[#d4a85e] text-black font-semibold py-2 px-4 md:px-6 rounded">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default HomePage;
