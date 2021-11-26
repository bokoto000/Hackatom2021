import {
  Routes, Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import questionsService from './services/questions';
import { v4 as uuid } from "uuid";
import Quiz from './components/Quiz';
import usersService from './services/users';

function App() {
  const [confetti, setConfetti] = useState(false);
  useEffect(() => {
    async function loadQuestions() {
      /* disable-next-line react-hooks/rules-of-hooks */
      const id = localStorage.getItem('id');
      if (!id)
        await localStorage.setItem('id', uuid());
      const data = await questionsService.loadAllQuestions();
    };
    loadQuestions();
  }, []);


  return (
    <div>
      <div style={{ minHeight: '90vh' }}>
        <Router>
          <Header />
          <Routes>
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route exact path='/' element={<div>
              <Quiz />
            </div>} />
          </Routes>
        </Router>
      </div>
      <Footer style={{ minHeight: '10vh' }} />
    </div>
  );
}

export default App;
