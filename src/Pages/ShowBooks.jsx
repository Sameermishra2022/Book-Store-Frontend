import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';

const ShowBooks = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10 font-sans selection:bg-indigo-500 selection:text-white">
      <div className="max-w-2xl mx-auto">
        <BackButton />

        <div className="text-center my-8">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Show Book Details
          </h1>
          <p className="text-slate-400 text-sm mt-2">Comprehensive view of the selected book</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Spinner />
          </div>
        ) : (
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 shadow-2xl space-y-6">
            <div className="flex flex-col space-y-1 pb-4 border-b border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">ID</span>
              <span className="text-slate-200 font-mono text-sm break-all">{book._id}</span>
            </div>

            <div className="flex flex-col space-y-1 pb-4 border-b border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Title</span>
              <span className="text-slate-100 font-bold text-lg">{book.title}</span>
            </div>

            <div className="flex flex-col space-y-1 pb-4 border-b border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Author</span>
              <span className="text-slate-300 text-base">{book.author}</span>
            </div>

            <div className="flex flex-col space-y-1 pb-4 border-b border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Publish Year</span>
              <div>
                <span className="px-3 py-1 bg-slate-800/80 border border-slate-700/60 rounded-full text-xs text-slate-300">
                  {book.publishyear}
                </span>
              </div>
            </div>

            <div className="flex flex-col space-y-1 pb-4 border-b border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Create Time</span>
              <span className="text-slate-400 text-sm">{book.createdAt ? new Date(book.createdAt).toString() : ''}</span>
            </div>

            <div className="flex flex-col space-y-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Last Update Time</span>
              <span className="text-slate-400 text-sm">{book.updatedAt ? new Date(book.updatedAt).toString() : ''}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowBooks;


// ShowBooks.jsx displays the details of a specific book fetched from the backend (GET /books/:id).
// It retrieves the book ID from the URL using useParams().
// Uses React Hooks (useState, useEffect, useParams, useNavigate) for state management, API calls, and navigation.

// If loading === true → Show a spinner (<Spinner />).
// If book is found → Display book details (title, author, publishyear).
// If no book is found (book === null) → Show "Book not found" message.

// useState	=>  Stores book data and loading state
// useEffect  =>  Fetches book details from backend when the page loads
// useParams  =>  Retrieves the book ID from the URL
// useNavigate  =>  Allows navigation to other pages (not used in this version, but useful)
