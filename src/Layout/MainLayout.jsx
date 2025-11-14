import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/Header';
import Footer from '../component/Footer';

const MainLayout = () => {
    return (
        <div>
           <header>
             <Header></Header>
            
           </header>
            <div>
                <Outlet></Outlet>

            </div>
            <footer className='mt-8' >
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;
