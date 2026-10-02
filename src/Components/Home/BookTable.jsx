import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { BiShow } from 'react-icons/bi';
import BookModel from './BookModel';

const BookTable = ({ books }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleOpenModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  return (
    <>
      <div className="w-full bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-slate-200">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-xs tracking-wider bg-slate-950/40">
                <th className="py-4 px-6">No</th>
                <th className="py-4 px-6">Title</th>
                <th className="py-4 px-6 max-md:hidden">Author</th>
                <th className="py-4 px-6 max-md:hidden">Publish Year</th>
                <th className="py-4 px-6 text-center">Operations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50 text-sm">
              {books?.map((book, index) => (
                <tr key={book._id || index} className="group hover:bg-slate-800/40 transition-all duration-200">
                  <td className="py-4 px-6 font-medium text-slate-400">{index + 1}</td>
                  <td className="py-4 px-6 font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors">{book.title}</td>
                  <td className="py-4 px-6 text-slate-300 max-md:hidden">{book.author}</td>
                  <td className="py-4 px-6 text-slate-400 max-md:hidden">
                    <span className="px-3 py-1 bg-slate-800/80 border border-slate-700/60 rounded-full text-xs">
                      {book.publishyear}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center gap-3">
                      <button 
                        onClick={() => handleOpenModal(book)} 
                        className="p-2 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 rounded-xl border border-sky-500/20 transition-all hover:scale-110"
                        title="Quick View"
                      >
                        <BiShow className="text-lg" />
                      </button>
                      <Link to={`/books/details/${book._id}`} className="p-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/20 transition-all hover:scale-110" title="Details">
                        <BsInfoCircle className="text-lg" />
                      </Link>
                      <Link to={`/books/edit/${book._id}`} className="p-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/20 transition-all hover:scale-110" title="Edit">
                        <AiOutlineEdit className="text-lg" />
                      </Link>
                      <Link to={`/books/delete/${book._id}`} className="p-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-xl border border-rose-500/20 transition-all hover:scale-110" title="Delete">
                        <MdOutlineDelete className="text-lg" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Popup ab container se bahar render hoga */}
      {showModal && selectedBook && (
        <BookModel book={selectedBook} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default BookTable;