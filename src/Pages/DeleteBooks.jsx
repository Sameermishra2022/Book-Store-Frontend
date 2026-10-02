import React, { useState } from 'react';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error deleting book', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10 font-sans selection:bg-indigo-500 selection:text-white flex flex-col justify-center items-center">
      <div className="w-full max-w-lg mx-auto">
        <div className="mb-6">
          <BackButton />
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Spinner />
          </div>
        ) : (
          <div className="bg-slate-900/80 backdrop-blur-xl border border-rose-500/30 rounded-3xl p-8 shadow-2xl shadow-rose-500/10 text-center relative">
            {/* Warning Icon Banner */}
            <div className="w-16 h-16 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-rose-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>

            <h1 className="text-2xl font-extrabold text-slate-100 mb-2">Delete Book?</h1>
            <p className="text-slate-400 text-sm mb-8">
              Are you sure you want to delete this book? This action cannot be undone and will permanently remove it from your vault.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => navigate('/')}
                className="w-1/2 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl transition-all duration-200 border border-slate-700"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteBook}
                className="w-1/2 py-3.5 bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white font-semibold rounded-xl shadow-lg shadow-rose-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-95"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteBooks;


// DeleteBooks.jsx is a confirmation page that allows users to delete a specific book.
// It retrieves the book ID from the URL using useParams().
// Uses React Hooks (useState, useEffect, useParams, useNavigate) for state management, API calls, and navigation.

// useParams 
// Extracts the id parameter from the URL (e.g., /books/delete/123).
// Allows us to fetch and delete the correct book from the backend.
// Since we need to delete a specific book, we must know its ID.

// useState 
// book → Stores the fetched book details (title, author, publishyear).
// loading → Controls the "Deleting..." button to indicate that the book is being deleted.

// When book data is received, setBook(response.data) updates the state.
// When loading is true, a spinner or "Deleting..." text is displayed.
// When loading is false, book details or confirmation message is shown.

// It allows React to re-render the component when data is updated.

// useEffect 
// Runs only once when the component loads (because [id] is in the dependency array).
// Sends an API request to fetch book details (GET /books/:id).
// Updates book state with the fetched data.

// Ensures that if the user navigates to another book's delete page, the component fetches the new book's data.

// Ensures book details are loaded as soon as the page is visited.
// Prevents unnecessary re-fetching unless the id changes.

// useNavigate 
// Allows navigation to another page after deleting the book.
// In this case, it redirects the user to the homepage (/) after the book is deleted.
// After deleting the book, the user is sent back to the homepage.
// Ensures users don't stay on a page for a deleted book.
