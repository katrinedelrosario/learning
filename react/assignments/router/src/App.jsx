import React from 'react';
import Header from './components/partials/header/header';
import Footer from './components/partials/footer/footer';
import Home from './components/pages/home/home';
import { Route, Routes } from 'react-router-dom';
import {Goals, GoalsDetails } from './components/pages/goals/goals'
import NotFound from './components/errors/notfound';
import './App.scss'

const App = () => {
    return (
        <div className='App'>
            <Header />
            <main>
                <Routes>
                    <Route index element={<Home />} />

                    <Route path='/goals'>
                        <Route index element={<Goals />} />
                        <Route path=':id' element={<GoalsDetails />} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}
export default App