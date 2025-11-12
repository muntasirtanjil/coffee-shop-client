import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import bgimage from '../assets/more/1.png'
import HomePage from './HomePage';


const Home = () => {
    const initialcoffees = useLoaderData();
    const [coffees, setCoffees] = useState (initialcoffees)
    // console.log(coffees)
    return (
        <div>
            <HomePage></HomePage>
            <div className=' w-full bg-cover bg-center  '
                style={{ backgroundImage: `url(${bgimage})` }}>
                <div className='flex flex-col items-center my-6'>
                    <h2 className='text-2xl text-center font-bold rancho '
                        style={{
                            textShadow: `
                            0 0 5px #E3B577,
                             0 0 10px #E3B577,
                            0 0 15px #E3B577,
                              0 0 25px #E3B577
                                 `
                        }}>Our Popular Products</h2>
                    <Link to='/addCoffee'>
                        <p className='py-2 px-3.5 mt-3   bg-[#E3B577] hover:bg-[#d19c5a] rancho rounded-lg shadow text-white'>Add Coffee</p>
                    </Link>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 mx-auto my-6 '

                >
                    {
                        coffees.map(coffee =>
                            <CoffeeCard
                                key={coffee._id}
                                coffee={coffee}
                                coffees={coffees}
                                setCoffees={setCoffees}
                            >
                            </CoffeeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;