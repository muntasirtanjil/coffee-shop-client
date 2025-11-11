import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/Header';

const MainLayout = () => {
    return (
        <div>
           <header>
             <Header></Header>
            
           </header>
            <div>
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default MainLayout;
