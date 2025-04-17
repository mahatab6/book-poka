import React from 'react';
import Book from './Book';

const Books = ({data}) => {
    return (
        <div>
            <h1 className='text-4xl font-bold my-4 text-center'>Books</h1>
            <div className='grid grid-cols-3 gap-5 justify-items-center'>
            {
                data.map((bookdata) => <Book key={bookdata.bookId} bookdata = {bookdata} ></Book>)
            }
            </div>
        </div>
    );
};

export default Books;