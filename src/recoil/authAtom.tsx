import {atom, selector, useRecoilValue} from "recoil";
import {Auth} from "../types";
import {decodeJWT} from "../until/authService";

const loadAccessToken = () => {
    const savedAccessToken = localStorage.getItem('accessToken');
    return savedAccessToken || ''; // 없으면 빈 문자열 반환
};
const loadUsername = () => {
    const savedUsername = localStorage.getItem('username');
    return savedUsername || '';
}
const Admin = ()=>{
    const auth:Auth = useRecoilValue(authAtom);
    return decodeJWT(auth.access_Token).role === 'ROLE_ADMIN';
}

export const authAtom = atom<Auth>({
    key:'authState',
    default:{
        username:loadUsername(),
        access_Token: loadAccessToken(),
        isAdmin:Admin()
    },
    effects_UNSTABLE: [
        ({onSet}) =>{
            onSet((newState:Auth) => {
                localStorage.setItem('accessToken', newState.access_Token);
                localStorage.setItem('username', newState.username);
            });
        }
    ]
});


export const isLoginSelector = selector<boolean>({
    key: 'isLoginSelector',
    get: ({get}):boolean => {
        const auth = get(authAtom);
        return auth.access_Token !== '';
    }
})