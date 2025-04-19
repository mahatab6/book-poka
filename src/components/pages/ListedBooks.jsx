import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { prevDataSTR } from '../../utility/DataAddTolocal';
import { useLoaderData } from 'react-router';
import Book from './Book';

const ListedBooks = () => {


    const datas = useLoaderData();
   const [readBookData, setreadBookData ] = useState([]);

    useEffect ( () => {
        const bookDataId = prevDataSTR ();
        const convertbookDataId = bookDataId.map ( id => parseInt(id) )
        const readbook = datas.filter(book => convertbookDataId.includes(book.bookId))
        setreadBookData(readbook);
        
    }, [])

    const [ sort, setSort] = useState ("");

    const handleSort = (type) => {
        setSort(type);

        if(type === "Pages"){
            const sortPages = [...readBookData].sort((a,b) => a.totalPages -b.totalPages);
            setreadBookData(sortPages);
        }
        if(type === "Rating"){
            const sortRating = [...readBookData].sort((a,b) => a.rating - b.rating);
            setreadBookData(sortRating);
        }
    };

    return (
        <div>
            <h1 className='text-3xl font-bold py-4 bg-base-200 text-center rounded-2xl'>Book</h1>
            <div className='text-center my-8'>
                <details className="dropdown">
                <summary className="btn m-1">Sort By: {sort?sort:''}</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort("Pages")}>Pages</a></li>
                        <li><a onClick={() => handleSort("Rating")}>Rating</a></li>
                    </ul>
                </details>
            </div>    
            <Tabs>
                <TabList>
                <Tab>Read Books</Tab>
                <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                <h2>Read Books list</h2>
                <h1>hello: {readBookData.length}</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        readBookData.map((b, index) => <Book key={index} bookdata = {b}></Book>)
                    }
                </div>
                </TabPanel>
                <TabPanel>
                <h2>Wishlist Books list</h2>
                </TabPanel>
            </Tabs>
          
        </div>
    );
};

export default ListedBooks;