import * as React from 'react';
import { Routes, Route} from 'react-router-dom';

import './App.css'

import Header from './pages/Header';
import Footer from './pages/Footer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Category } from './pages/Category';
import { Meal } from './components/Meal';
import { NotFound } from './pages/NotFound';

function App() {


    return (
        <div>
            <Header />

            <div className='content container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='category/:name' element={<Category />} />
                    <Route path='meal/:id' element={<Meal />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>

            <Footer />
        </div>
    );

}

export default App;