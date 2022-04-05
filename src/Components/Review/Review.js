import React from 'react';

const Review = (props) => {
    const { name, desc, rating } = props.review;
    return (
        <div>
            <div >
                <div className='border-2 p-5 rounded-2xl'>
                    <h1>{name}</h1>
                    <p>{desc}</p>
                    <p>Rating: {rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;