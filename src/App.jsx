// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import './App.css';

const list = ['#DevOps', '#Artificial Intelligence', '#Web Development', '#App Development', '#Cyber Security', '#UI/UX', '#Blockchain', '#Abstract', '#DevOps', '#Artificial Intelligence', '#Web Development', '#App Development', '#Cyber Security', '#UI/UX', '#Blockchain', '#Abstract'];

function App() {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-white m-0 bg-blend-lighten w-screen ">
            <div className="flex justify-center bg-[#E4e4e4] h-[3.2rem] w-screen items-center h-10 rounded-lg m-0 relative">
                <div className="container bg-red-500 h-[1.3rem] p-0 m-0 relative blur-lg">
                    {" "}
                </div>
                <button className="mx-1 px-1 hover:bg-sky-100  hover:text-blue-900 hover:border-none text-black w-[1.5rem] h-[1.5rem] rounded-lg text-base" onClick={scrollLeft}>
                    {"<"}
                </button>
                <div className="container h-[1.3rem] bg-red-500 relative blur-lg">
                    {""}
                </div>
                <div className="container w-full">

                    <div className="overflow-x-hidden rounded-lg h-15">

                        <ul
                            ref={scrollRef}
                            className=" py-1 flex flex-grow gap-3 rounded-lg overflow-hidden scroll-smooth"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', overflowX: 'hidden' }}
                        >

                            {list.map((item, index) => (
                                <li key={index} className="px-4 py-3 h-[2.5rem] rounded-lg text-white text-xs  bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 flex-shrink-0">
                                    {item}
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>

                <div className="container bg-red-500 h-[1.3rem] p-0 m-0 relative blur-lg">
                    {""}
                </div>
                <button className="mx-2 px-1 hover:bg-sky-100 hover:text-blue-900 hover:border-none text-transparent w-[1.5rem] h-[1.5rem] rounded-lg " onClick={scrollRight}>
                    {'>'}
                </button>
                <div className="container bg-red-500 h-[1.3rem] p-0 m-0 relative blur-lg">
                    {" "}
                </div>
            </div>
        </div>
    );
}

export default App;