import { useRef } from 'react';
import './App.css';

const list = [
    '#DevOps', '#Artificial Intelligence', '#Web Development', '#App Development',
    '#Cyber Security', '#UI/UX', '#Blockchain', '#Abstract', '#DevOps',
    '#Artificial Intelligence', '#Web Development', '#App Development',
    '#Cyber Security', '#UI/UX', '#Blockchain', '#Abstract'
];

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
        <div className="flex-1 bg-white m-0 w-screen h-screen flex items-center justify-center">
            <div className="flex items-center bg-gray-200 h-14 w-full rounded-lg m-0 relative overflow-hidden">
                <button
                    className="absolute left-0 px-1 hover:bg-sky-100 hover:text-blue-900 text-black w-6 h-full sm:w-8 sm:h-full rounded-lg text-base backdrop-blur-lg bg-gray-200 bg-opacity-60"
                    onClick={scrollLeft}
                >
                    {"<"}
                </button>
                <div>
                    {" "}
                </div>
                <div></div>
                <div className="flex h-full overflow-hidden">
                    <ul
                        ref={scrollRef}
                        className="flex items-center gap-3 h-full overflow-x-auto scroll-smooth whitespace-nowrap pl-2"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {list.map((item, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 sm:h-10 lg:h-10 rounded-lg text-white text-xs sm:text-sm lg:text-base bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 flex-shrink-0"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    {" "}
                </div>
                <button
                    className="absolute right-0 px-1 hover:bg-sky-100 hover:text-blue-900 text-black w-6 h-full sm:w-8 sm:h-full rounded-lg text-base backdrop-blur-md bg-gray-200 bg-opacity-60"
                    onClick={scrollRight}
                >
                    {'>'}
                </button>
            </div>
        </div>
    );
}

export default App;