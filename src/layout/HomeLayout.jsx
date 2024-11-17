import React from 'react';
import Header from '../Component/Header';

const HomeLayout = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <header>
                <Header></Header>
            </header>
            <nav></nav>
            <main></main>
        </div>
    );
};

export default HomeLayout;