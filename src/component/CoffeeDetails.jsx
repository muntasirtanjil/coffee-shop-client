import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    console.log(coffee)
    const { name, price, supplier, taste, category, details, photoURL } = coffee;


    return (
        <div className="min-h-screen w-11/12 mx-auto bg-[#F4F3F0] flex flex-col items-center py-10">
            {/* Back Button */}
            <div className="w-10/12 mb-8">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-[#374151] font-semibold hover:text-[#E3B577] transition-colors"
                >
                    <BsArrowLeft size={20} />
                    <span className='rancho'> Back to Home</span>
                </Link>
            </div>

            {/* Coffee Details Card */}
            <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-8 p-6 md:p-10 w-10/12 border border-[#E3B577]">
                {/* Image */}
                <div className="flex justify-center md:w-1/3">
                    <img
                        src={photoURL}
                        alt={name}
                        className="w-52 md:w-64 object-cover drop-shadow-lg"
                    />
                </div>

                {/* Info */}
                <div className="md:w-2/3 space-y-3 font-raleway text-gray-700">
                    <h2 className="text-2xl font-rancho text-[#331A15] mb-3">Niceties</h2>
                    <p><span className="font-semibold text-[#331A15]">Name:</span> {name}</p>
                    <p><span className="font-semibold text-[#331A15]">price:</span> {price}</p>
                    <p><span className="font-semibold text-[#331A15]">Supplier:</span> {supplier}</p>
                    <p><span className="font-semibold text-[#331A15]">Taste:</span> {taste}</p>
                    <p><span className="font-semibold text-[#331A15]">Category:</span> {category}</p>
                    <p><span className="font-semibold text-[#331A15]">Details:</span> {details}</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;