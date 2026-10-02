import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModel = ({ book, onClose }) => {
  return (
    <div
      className='fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex justify-center items-center p-4 transition-all duration-300'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 flex flex-col relative shadow-2xl shadow-indigo-500/10 text-slate-100'
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute right-6 top-6 p-2 bg-slate-800/80 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 rounded-xl border border-slate-700/60 transition-all duration-200'
        >
          <AiOutlineClose className='text-xl' />
        </button>

        {/* Publish Year Badge */}
        <div className='w-fit px-3.5 py-1 bg-gradient-to-r from-indigo-500/10 to-sky-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-xs font-semibold mb-3'>
          {book.publishyear}
        </div>

        {/* Book ID */}
        <p className='text-xs font-mono text-slate-500 mb-6 truncate'>ID: {book._id}</p>

        {/* Title */}
        <div className='flex items-center gap-3.5 mb-4'>
          <div className='p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400 shrink-0'>
            <PiBookOpenTextLight className='text-2xl' />
          </div>
          <h2 className='text-xl font-bold text-slate-100'>{book.title}</h2>
        </div>

        {/* Author */}
        <div className='flex items-center gap-3.5 mb-6 pb-6 border-b border-slate-800'>
          <div className='p-3 bg-sky-500/10 rounded-xl border border-sky-500/20 text-sky-400 shrink-0'>
            <BiUserCircle className='text-2xl' />
          </div>
          <h4 className='text-base font-medium text-slate-300'>{book.author}</h4>
        </div>

        {/* Extra Description Content */}
        <h3 className='text-sm font-semibold text-indigo-400 mb-2 uppercase tracking-wider'>Anything You want to show</h3>
        <p className='text-sm text-slate-400 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800/60'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </p>
      </div>
    </div>
  );
};

export default BookModel;