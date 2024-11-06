import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Route,
    Routes
}from 'react-router-dom';

import {RecoilRoot} from "recoil";
import Main from './page/main';
import Login from './page/login';
import Signup from './page/signup';
import MoreContents from './page/moreContents';
import Write from './page/write';
import Post from '../src/page/particularContent';
import Report from "./page/report";
import DetailedReport from "./page/detailedReport";
import BanManage from "./page/banManage";
import UserBan from './page/userBan';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RecoilRoot>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Main />}></Route>
                <Route path={'/login'} element={<Login />}></Route>
                <Route path={'/signup'} element={<Signup />}></Route>
                <Route path='/more' element={<MoreContents />}></Route>
                <Route path={'/write'} element={<Write />}></Route>
                <Route path={'/post/:id'} element={<Post />}></Route>
                <Route path={'/report'} element={<Report />}></Route>
                <Route path={'/report/:id'} element={<DetailedReport />}></Route>
                <Route path={'/ban'} element={<BanManage />}></Route>
                <Route path={'/user/ban'} element={<UserBan />}></Route>
            </Routes>
        </BrowserRouter>
    </RecoilRoot>
);

