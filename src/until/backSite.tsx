import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useCallback } from "react";
import {backSightAtom} from "../recoil/backSight";
import {useRecoilState} from "recoil";



export default function BackSite() {
    const location = useLocation();
    const [backSight, setBackSight] = useRecoilState(backSightAtom);
    const setBackSightCallback = useCallback(() => {
        // 이전 페이지 경로 저장
        setBackSight({
            'before': location.pathname,
        });
    }, [location.pathname]);
    useEffect(() => {
        setBackSightCallback();
        console.log(location.pathname);
        console.log(backSight);

    }, [setBackSightCallback]);
    return (
            <Outlet />
    );
}