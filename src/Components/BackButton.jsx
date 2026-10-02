import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='flex items-center justify-center p-3.5 bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600 text-white rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105 active:scale-95'
      >
        <BsArrowLeft className='text-xl font-bold' />
      </Link>
    </div>
  );
};

export default BackButton;