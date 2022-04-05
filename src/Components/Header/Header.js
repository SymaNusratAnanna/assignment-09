import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
        <div className='text-center text-base'>
            
            <Link className='mr-10 text-3xl' to ='/home'>Home</Link>
            <Link className='mr-10 text-3xl' to ='/reviews'>Reviews</Link>
            <Link className='mr-10 text-3xl' to ='/dashboard'>Dashboard</Link>
            <Link className='mr-10 text-3xl' to ='/blogs'>Blogs</Link>
            <Link className='mr-10 text-3xl' to ='/about'>About </Link>
        </div>
        </nav>
    );
};

export default Header;