import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import BookModel from './BookModel';

const BookSingleCard = ({ books }) => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="h-full">
      <div className="group relative bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between h-full">
        <div>
          {/* Publish Year Badge */}
          <span className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-indigo-500/10 to-sky-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-xs font-semibold">
            {books.publishYear || books.publishyear}
          </span>

          {/* Book ID / Subtitle */}
          <p className="text-xs font-mono text-slate-500 mb-4 tracking-wider truncate max-w-[200px]">ID: {books._id}</p>

          {/* Title */}
          <div className="flex items-start gap-3 mb-3">
            <div className="p-2.5 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400 shrink-0">
              <PiBookOpenTextLight className="text-xl" />
            </div>
            <h2 className="text-lg font-bold text-slate-100 group-hover:text-indigo-400 transition-colors line-clamp-1">{books.title}</h2>
          </div>

          {/* Author */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-sky-500/10 rounded-xl border border-sky-500/20 text-sky-400 shrink-0">
              <BiUserCircle className="text-xl" />
            </div>
            <h4 className="text-sm font-medium text-slate-300 truncate">{books.author}</h4>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-4 border-t border-slate-800/60 mt-auto">
          <button 
            onClick={() => setShowModal(true)} 
            className="p-2.5 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 rounded-xl border border-sky-500/20 transition-all hover:scale-110"
            title="Quick View"
          >
            <BiShow className="text-lg" />
          </button>
          <Link to={`/books/details/${books._id}`} className="p-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/20 transition-all hover:scale-110" title="Details">
            <BsInfoCircle className="text-lg" />
          </Link>
          <Link to={`/books/edit/${books._id}`} className="p-2.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/20 transition-all hover:scale-110" title="Edit">
            <AiOutlineEdit className="text-lg" />
          </Link>
          <Link to={`/books/delete/${books._id}`} className="p-2.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-xl border border-rose-500/20 transition-all hover:scale-110" title="Delete">
            <MdOutlineDelete className="text-lg" />
          </Link>
        </div>
      </div>

      {showModal && (
        <BookModel book={books} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;