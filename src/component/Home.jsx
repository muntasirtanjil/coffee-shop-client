import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const coffees = useLoaderData();
    console.log(coffees)
    return (
        <div >
            <div className='flex flex-col items-center my-6'>
                <h2 className='text-2xl text-center font-bold rancho '>Our Popular Products</h2>
                <p className='py-2 px-3.5 mt-3   bg-[#E3B577] rancho rounded-lg'>Add Coffee</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 mx-auto my-6'>
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;