import React from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';


const Book = ({bookdata}) => {
    const {image, bookName, tags, author, category, rating, yearOfPublishing, bookId} = bookdata;
    return (
        <div>
            
         <Link to={`/bookdetails/${bookId}`}>
            <div className="card bg-gray-200 w-96 shadow-sm mb-">
                <figure>
                    <img className='h-[334px] p-5 bg-amber-400'
                    src={image}
                    alt="" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-around text-xl text-yellow-500'>
                    {
                        tags.map((tags, index)=><button key={index}>{tags}</button>)
                    }
                    </div>
                    <h2 className="card-title">
                    {bookName}
                    </h2>
                    <p className='text-xl'>By: {author}</p>
                    <p className='pb-2 border-b-2 border-dashed'>Publish: {yearOfPublishing}</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="flex items-center badge-outline">{rating}<FaRegStarHalfStroke /></div>
                    </div>
                </div>
            </div>
         </Link>
        </div>
    );
};

export default Book;