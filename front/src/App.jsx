// import React from 'react';
// import Inicio from './components/Inicio';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { TaskPages } from './pages/TaskPages'
import { FormPages } from './pages/FormPages'
import {Navigation} from './components/Navigation'
import {Toaster} from 'react-hot-toast'
function App() {

  return (
    // <main className="App">
   
      <div className='container mx-auto'>
      
      <BrowserRouter>
      
        <Navigation />
        <Routes>
          

          <Route path="/" element={<Navigate to="/donaciones" />} />          
          <Route path="/donaciones" element={<TaskPages />} />
          <Route path="/donaciones-create" element={<FormPages />} />
          <Route path="/donaciones/:id" element={<FormPages />} />
          



        </Routes>
        <Toaster/>
      </BrowserRouter>
     
      </div>
      
    //  </main>
  );
}

export default App
