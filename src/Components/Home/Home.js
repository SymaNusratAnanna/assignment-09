import React from 'react';

const Home = () => {
    return (
        // <div className='flex justify-between items-center mt-5 mx-24 align-middle'>
        <div className='grid grid-cols-2 gap-4 ml-24 mt-12'>
<div className='mt-28'>
    <h1 className='text-6xl'>Wear your <span className='text-6xl text-blue-600'> Fantasy!!</span></h1>
    <p className='text-xl mb-3 mt-5'>
Wear Fantasy is a brand where you can buy your desirabele fashion wear!!Grave the best outfit in you affordable cost with best quality.
    </p>
    <button className='p-3 bg-blue-600 rounded-xl text-3xl text-white'>Contact us</button>
</div>
<div>
    <img src={require('../../Assets/Images/coverpic.jpg')} alt="" />
</div>

<div>
    <button className='p-3 bg-blue-600 rounded-xl text-3xl text-white'> Show all reviews</button>
</div>
        </div>
    );
};

export default Home;