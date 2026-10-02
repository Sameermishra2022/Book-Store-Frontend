import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../Components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BookTable from '../Components/Home/BookTable';
import BookCard from '../Components/Home/BookCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const [showType, setShowType] = useState(() => {
    return sessionStorage.getItem('viewType') || 'table';
  });

  const handleViewChange = (type) => {
    setShowType(type);
    sessionStorage.setItem('viewType', type);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/books`)
      .then((response) => {
        setBooks(response.data.data || response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-10 px-20 bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Header & Controls Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-4">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
          Book Store
        </h1>

        {/* Controls Group: Add Book button + Table/Card switcher saath mein */}
        <div className="flex items-center gap-4">
          {/* Add Book Button (Ab Table/Card view ke paas left side mein hai) */}
          <Link
            to="/books/create"
            className="p-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-2xl shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center"
            title="Add Book"
          >
            <MdOutlineAddBox className="text-2xl" />
          </Link>

          {/* Table / Card Switcher */}
          <div className="flex bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800 backdrop-blur-xl shadow-lg">
            <button
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                showType === 'table'
                  ? 'bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-md shadow-indigo-500/25'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              onClick={() => handleViewChange('table')}
            >
              Table View
            </button>
            <button
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                showType === 'card'
                  ? 'bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-md shadow-indigo-500/25'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              onClick={() => handleViewChange('card')}
            >
              Card View
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Spinner />
        </div>
      ) : showType === 'table' ? (
        <BookTable books={books} />
      ) : (
        <BookCard books={books} />
      )}
    </div>
  );
};

export default Home;


// Home.jsx is the homepage of the book management system.
// It fetches and displays all books from the backend.
// Users can view, add, edit, and delete books from this page.
// It allows switching between Table View (BookTable.jsx) and Card View (BookCard.jsx).

// useState	Manages state (books, loading status, view type)
// useEffect	Fetches books from the backend when the component loads

// What does it do?

// Runs once when the component loads ([] as the dependency array).
// Fetches books from the backend (GET /books) using Axios.
// Updates books state with the API response.
// If an error occurs, it logs the error and stops loading.


// Why is it important?

// Ensures that books are fetched from the backend when the page loads.
// Avoids unnecessary re-renders by using an empty dependency array ([]).

// These hooks ensure state management, API fetching, and dynamic UI updates in the Home.jsx component. 


// What is response.data.data?

// When the API request is successful, it gets a response object from the backend.
// response.data → Contains the actual response body (the data returned from the API).
// response.data.data → Accesses the data field inside the response body (nested data).
// setBooks(response.data.data); → Updates the books state with the fetched data.

// response.data → Contains the entire JSON response.
// response.data.data → Extracts only the array of books inside the data field.

// If the API response has a data key, we extract only that key (response.data.data) to avoid unnecessary nesting.
// This makes books a clean array that is easier to use in the UI.
