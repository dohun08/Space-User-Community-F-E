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
import ReportManage from "./page/reportManage";
import DetailedReport from "./page/detailedReport";
import BanManage from "./page/banManage";
import UserBan from './page/userBan';
import Report from "./page/Report";
import UserPage from "./page/UserPage";
import Search from "./page/search";

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
                <Route path={'/reportManage/manage'} element={<ReportManage />}></Route>
                <Route path={'/reportManage/manage/:id'} element={<DetailedReport />}></Route>
                <Route path={'/ban'} element={<BanManage />}></Route>
                <Route path={'/user/ban'} element={<UserBan />}></Route>
                <Route path={'/report'} element={<Report />}></Route>
                <Route path={'/user/:id'} element={<UserPage/>}></Route>
                <Route path={'/search/:title'} element={<Search />}></Route>
            </Routes>
        </BrowserRouter>
    </RecoilRoot>
);

