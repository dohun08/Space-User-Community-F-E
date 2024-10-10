import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Route,
    Routes
}from 'react-router-dom';

import Main from './page/main';
import Login from './page/login';
import Signup from './page/signup';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Main />}></Route>
            <Route path={'/login'} element={<Login />}></Route>
            <Route path={'/signup'} element={<Signup />}></Route>
        </Routes>
    </BrowserRouter>
);

