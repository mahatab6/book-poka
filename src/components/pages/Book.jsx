import React from 'react';

const Book = ({bookdata}) => {
    const {image, bookName} = bookdata;
    console.log(bookdata)
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img className='h-[334px] p-5 bg-amber-400'
                    src={image}
                    alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {bookName}
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;