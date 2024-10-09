import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Route,
    Routes
}from 'react-router-dom';

import Main from './page/main';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Main />}></Route>
        </Routes>
    </BrowserRouter>
);

