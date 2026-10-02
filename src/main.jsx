import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <SnackbarProvider>
     <App />
  </SnackbarProvider>
  </BrowserRouter>,
)

// main.jsx is the entry point of a React application.
// It is responsible for rendering the entire app inside the HTML file.
// It wraps the App component inside the React Router to enable navigation.

// index.html	The HTML file that contains <div id="root">
// main.jsx	Loads and renders the React app inside #root
// App.jsx	Contains frontend routes (switches between pages)