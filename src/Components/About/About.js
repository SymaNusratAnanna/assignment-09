import React from 'react';

const About = () => {
    return (
        <div>
        <div>
            <h1 className='text-3xl mt-5 font-semibold'> About </h1>
        </div>
        <div className='items-center  '>
            <img className='align-middle' src= {require("../../Assets/Images/fantasy.jpg") } alt="" />
        </div>
        <div className='bg-cyan-600 mt-5 mx-24 align-middle'>
            <h1 className='text-3xl '>We are one of the best brand  in your Town!! , You already heard about us thats why you're reading this!!</h1>
            <p className='text-2xl'>Thanks for co-opperation </p>
            <p className='text-2xl'>Stay with us</p>
            <p className='text-2xl'>Phone : 94572366</p>

              <p className='text-2xl'>Address: 46/7 New York , US</p>
        </div>
        </div>
    );
};

export default About;