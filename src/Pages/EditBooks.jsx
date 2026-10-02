import React, { useState, useEffect } from 'react';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishyear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishyear);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please Check console');
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishyear,
    };
    setLoading(true);
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10 font-sans selection:bg-indigo-500 selection:text-white">
      <div className="max-w-2xl mx-auto">
        <BackButton />

        <div className="text-center my-8">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Edit Book
          </h1>
          <p className="text-slate-400 text-sm mt-2">Update existing book details in your vault</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Spinner />
          </div>
        ) : (
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 shadow-2xl space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Title</label>
              <input
                type="text"
                placeholder="Enter book title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Author</label>
              <input
                type="text"
                placeholder="Enter author name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Publish Year</label>
              <input
                type="number"
                placeholder="Enter publish year"
                value={publishyear}
                onChange={(e) => setPublishYear(e.target.value)}
                className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <button
              onClick={handleEditBook}
              className="w-full mt-4 py-3.5 bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.01] active:scale-95"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditBooks;

// EditBooks.jsx is a form page that allows users to edit an existing book's details.
// It fetches book data from the backend (GET /books/:id) and updates it (PUT /books/:id) when the user clicks "Save Changes".
// It uses React Hooks (useState, useEffect, useNavigate, useParams) for state management, API calls, and navigation.

// Extracts the id parameter from the URL (e.g., /books/edit/123).
// Allows us to fetch and update the correct book.
// Since we need to edit a specific book, we must know its ID.
// Example: If the user visits /books/edit/123, id will be "123".

// When book data is fetched, setTitle(response.data.title) updates the title field.
// When the user types, setTitle(e.target.value) updates the state dynamically.

// Runs only once when the component loads (because of [id] as the dependency).
// If the book ID (id) changes, useEffect will fetch new book data.

// Why is [id] needed?
// Ensures the correct book is fetched when a user navigates to another edit page (/books/edit/:id).



// Extracts book details from the API response and updates the form fields.
// response.data.title → Gets the "title" field from the response.
// response.data.author → Gets the "author" field.
// response.data.publishyear → Gets the "publishyear" field.

// What is setLoading?
// setLoading is a state updater function in React.
// It controls the loading state, which is used to show or hide a loading indicator while an operation is in progress.
// Helps prevent multiple clicks and gives visual feedback to the user.

// loading (state variable) → Tracks whether an operation (e.g., API call) is in progress.
// setLoading(false) → Operation is finished, hide the loading indicator.
// setLoading(true) → Operation is in progress, show the loading indicator.