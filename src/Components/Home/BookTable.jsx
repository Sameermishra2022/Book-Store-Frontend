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
      {/* ================= DESKTOP ================= */}
      <div className="w-full bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl shadow-2xl overflow-hidden">

        <div className="hidden lg:block">
          <table className="w-full border-collapse text-left text-slate-200">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-xs tracking-wider bg-slate-950/40">
                <th className="py-4 px-6">No</th>
                <th className="py-4 px-6">Title</th>
                <th className="py-4 px-6">Author</th>
                <th className="py-4 px-6">Publish Year</th>
                <th className="py-4 px-6 text-center">Operations</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800/50 text-sm">
              {books?.map((book, index) => (
                <tr
                  key={book._id || index}
                  className="group hover:bg-slate-800/40 transition-all duration-200"
                >
                  <td className="py-4 px-6 font-medium text-slate-400">
                    {index + 1}
                  </td>

                  <td className="py-4 px-6 font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors">
                    {book.title}
                  </td>

                  <td className="py-4 px-6 text-slate-300">
                    {book.author}
                  </td>

                  <td className="py-4 px-6 text-slate-400">
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

                      <Link
                        to={`/books/details/${book._id}`}
                        className="p-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/20 transition-all hover:scale-110"
                        title="Details"
                      >
                        <BsInfoCircle className="text-lg" />
                      </Link>

                      <Link
                        to={`/books/edit/${book._id}`}
                        className="p-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/20 transition-all hover:scale-110"
                        title="Edit"
                      >
                        <AiOutlineEdit className="text-lg" />
                      </Link>

                      <Link
                        to={`/books/delete/${book._id}`}
                        className="p-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-xl border border-rose-500/20 transition-all hover:scale-110"
                        title="Delete"
                      >
                        <MdOutlineDelete className="text-lg" />
                      </Link>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        {/* ================= TABLET + MOBILE ================= */}
        <div className="lg:hidden p-3 sm:p-5 space-y-3">

          {books?.map((book, index) => (
            <div
              key={book._id || index}
              className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-4 sm:p-5 hover:bg-slate-800/40 hover:border-slate-700 transition-all duration-200"
            >

              {/* Number + Publish Year */}
              <div className="flex items-center justify-between mb-4">

                <span className="text-xs font-medium text-slate-400 mb-7">
                  {index + 1}
                </span>

                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">
                    Publish Year
                  </p>

                  <span className="inline-flex px-2.5 py-1 bg-slate-800 border border-slate-700 rounded-lg text-[11px] text-slate-400">
                    {book.publishyear}
                  </span>
                </div>

              </div>


              {/* Title */}
              <div className="mb-4">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">
                  Title
                </p>

                <h3 className="text-base sm:text-lg font-semibold text-slate-100 break-words leading-snug">
                  {book.title}
                </h3>
              </div>


              {/* Author */}
              <div className="mb-4">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">
                  Author
                </p>

                <p className="text-sm text-slate-300 break-words leading-relaxed">
                  {book.author}
                </p>
              </div>


              {/* Operations */}
              <div className="pt-3 border-t border-slate-800/70">

                <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-2.5">
                  Operations
                </p>

                <div className="grid grid-cols-4 gap-2">

                  <button
                    onClick={() => handleOpenModal(book)}
                    className="flex items-center justify-center p-2.5 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 rounded-lg border border-sky-500/20 transition-all"
                    title="Quick View"
                  >
                    <BiShow className="text-lg" />
                  </button>

                  <Link
                    to={`/books/details/${book._id}`}
                    className="flex items-center justify-center p-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-lg border border-emerald-500/20 transition-all"
                    title="Details"
                  >
                    <BsInfoCircle className="text-lg" />
                  </Link>

                  <Link
                    to={`/books/edit/${book._id}`}
                    className="flex items-center justify-center p-2.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 rounded-lg border border-amber-500/20 transition-all"
                    title="Edit"
                  >
                    <AiOutlineEdit className="text-lg" />
                  </Link>

                  <Link
                    to={`/books/delete/${book._id}`}
                    className="flex items-center justify-center p-2.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-lg border border-rose-500/20 transition-all"
                    title="Delete"
                  >
                    <MdOutlineDelete className="text-lg" />
                  </Link>

                </div>
              </div>

            </div>
          ))}

        </div>

      </div>


      {/* Modal */}
      {showModal && selectedBook && (
        <BookModel
          book={selectedBook}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default BookTable;