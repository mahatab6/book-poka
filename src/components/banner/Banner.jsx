import React from 'react';
import image from '../../assets/pngwing.png'



const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 h-[554px] rounded-3xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                    src={image}
                    className="ml-96" />
                    <div>
                    <h1 className="text-5xl font-bold">Books to freshen up <br/> your bookshelf</h1>
                    <button className="btn btn-primary mt-5">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;