import React from 'react';
import useReview from '../../hook/useReview'
import Review from '../Review/Review';
const Reviews = () => {
    const [reviews] = useReview();
    return (
        <div>
            <div>
            <h1 className='text-3xl mt-10 font-semibold'> Our Customers review</h1>
            </div>
            <div className='grid grid-cols-3 mt-10 border-2 items-center'>
{
    reviews.map(review=><Review key = {review.id} review = {review}></Review>)
}
            </div>
        </div>
    );
};

export default Reviews;