import { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Pages/Home';
import Hotel from './Components/Pages/Hotel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rooms from './Components/Pages/Rooms';
import Reviews from './Components/Pages/Reviews';
import Book from './Components/Components/Book';
import LoginSignup from './Components/Components/LoginSignup';
// import Questions from './Components/Pages/Questions';
// import Nearby from './Components/Pages/Nearby';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='/hotel/:hotel_id' element={<Hotel/>}/>
          <Route path='/hotel/:hotel_id/:name/rooms' element={<Rooms/>}/>
          <Route path='/hotel/:hotel_id/:name/reviews' element={<Reviews/>}/>
          <Route path='/hotel/:hotel_id/:name/rooms/book' element={<Book/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
          {/* <Route path='/hotel/:hotel_id/:name/questions' element={<Questions/>}/>
          <Route path='/hotel/:hotel_id/:name/nearby-places' element={<Nearby/>}/> */}
          
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
