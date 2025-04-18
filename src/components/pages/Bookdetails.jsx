import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Bookdetails = () => {
    const data = useLoaderData();    
    const {id} = useParams();
    
    const book = data.find (item => item.bookId === id || item.bookId === parseInt(id));
    const {image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating} = book;

    return (
        <div>
            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className='ml-10'>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className='py-2 text-xl border-b-1 border-black'>By:{author}</p>
                    <p className='py-2 text-xl border-b-1 border-black '>{category}</p>
                    <p className="py-6"><span className='font-blod text-2xl'>review: </span>{review}</p>
                    <div className='flex text-2xl font-semibold border-b-1 border-black pb-2'>
                        <p>Tags:</p>
                    {
                        tags.map((tag) => <button className='text-green-500 ml-4'>#{tag}</button>)
                    }
                    </div>
                    <div className='flex gap-3 my-2'>
                        <div>
                        <p>Number of Pages: </p>
                        <p>Publisher: </p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                        </div>
                        <div>
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                        </div>

                    </div>

                    <button className="btn btn-primary">Read</button>
                    <button className="btn btn-primary ml-2">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookdetails;