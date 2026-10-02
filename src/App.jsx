import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
import CreateBooks from './Pages/CreateBooks'
import ShowBooks from './Pages/ShowBooks'
import EditBooks from './Pages/EditBooks'
import DeleteBooks from './Pages/DeleteBooks'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/books/create' element={<CreateBooks/>}/>
    <Route path='/books/details/:id' element={<ShowBooks/>}/>
    <Route path='/books/edit/:id' element={<EditBooks/>}/>
    <Route path='/books/delete/:id' element={<DeleteBooks/>}/>
   </Routes>
  )
}

export default App


// App.jsx is the main component of the React frontend.
// It defines all frontend routes and determines which page is displayed based on the URL.
// Uses React Router (Routes and Route) to switch between pages.

// When the user visits /, the Home component is shown.
// :id is a dynamic parameter.
// It allows us to edit a specific book based on its ID.

// This exports the App component so it can be used in main.jsx.