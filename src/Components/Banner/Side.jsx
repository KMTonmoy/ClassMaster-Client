import { Link } from 'react-router-dom';

const Slide = ({ image, text, description }) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[38rem] relative'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='absolute inset-0 bg-gray-900/40 flex items-center justify-center'>
                <div className='px-5 text-center'>
                    <h1 className='text-3xl font-semibold text-white lg:text-4xl mb-4'>
                        {text}
                    </h1>
                    <p className='text-lg text-white'>{description}</p>
                    <div className='mt-6'>
                        <Link
                            to='/create'
                            className='inline-block px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-red-600 rounded-md transition duration-300 hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'
                        >
                            Get Started

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;
