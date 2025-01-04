import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Route,
    Routes
}from 'react-router-dom';

import {QueryClient, QueryClientProvider} from "react-query";
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
import UserBan from './page/userBanList';
import Report from "./page/Report";
import UserPage from "./page/UserPage";
import Search from "./page/search";
import AdminRoute from "./until/AdminRoute";
import PatchDocument from "./page/patchDocument";
import TokenRefresher from "./until/check";
import BroadCastContent from "./page/broadCast";
import BackSite from "./until/backSite";
const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

const queryClient = new QueryClient();
root.render(
    <RecoilRoot>
        <BrowserRouter>
            <TokenRefresher>
                <QueryClientProvider client={queryClient} >
                <Routes>
                    <Route element={<BackSite/>}>
                        <Route path={'/'} element={<Main />}></Route>
                        <Route path={'/login'} element={<Login />}></Route>
                        <Route path={'/signup'} element={<Signup />}></Route>
                        <Route path='/more' element={<MoreContents />}></Route>
                        <Route path={'/write'} element={<Write />}></Route>
                        <Route path={'/post/:id'} element={<Post />}></Route>
                        <Route path={'/broadcast/:id'} element={<BroadCastContent />}></Route>
                        <Route path={'/report'} element={<Report />}></Route>
                        <Route path={'/user/:id'} element={<UserPage/>}></Route>
                        <Route path={'/search/:title'} element={<Search />}></Route>
                        <Route path={'/patch/:id'} element={<PatchDocument />}></Route>
                    </Route>
                    <Route element={<AdminRoute />}> {/* admin route*/}
                        <Route path={'/report/manage'} element={<ReportManage />}></Route>
                        <Route path={'/report/manage/:id'} element={<DetailedReport />}></Route>
                        <Route path={'/ban'} element={<BanManage />}></Route>
                        <Route path={'/ban/user'} element={<UserBan />}></Route>
                    </Route>
                </Routes>
                </QueryClientProvider>
            </TokenRefresher>
        </BrowserRouter>
    </RecoilRoot>
);

